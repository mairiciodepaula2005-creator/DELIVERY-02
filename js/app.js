/**
 * ==========================================================================
 * DELIVERY WEB APPLICATION - JAVASCRIPT PRINCIPAL
 * Lógica da Sacola, Busca, Modal, Bairros, Abas Inferiores e WhatsApp
 * ==========================================================================
 */

// ESTADO DA APLICAÇÃO
const AppState = {
  cart: [],
  activeCategory: null,
  searchQuery: "",
  deliveryType: "delivery", // "delivery" ou "pickup"
  selectedNeighborhood: null,
  paymentMethod: "pix",
  cashChange: "",
  modalItem: null,
  modalQuantity: 1,
  appliedCoupon: null,
  currentTab: "home"
};

// INICIALIZAÇÃO
document.addEventListener("DOMContentLoaded", () => {
  initStoreInfo();
  loadSavedProfile();
  renderCategoriesNav();
  renderProductCatalog();
  renderNeighborhoodsSelect();
  initEventListeners();
  initBottomTabs();
  initScrollSpy();
  renderPastOrders();
});

// FORMATAÇÃO DE MOEDA (BRL)
function formatCurrency(val) {
  return Number(val).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

// 1. CARREGAR INFORMAÇÕES DA LOJA
function initStoreInfo() {
  const nameEl = document.getElementById("store-name");
  const sloganEl = document.getElementById("store-slogan");
  const statusEl = document.getElementById("store-status");
  const minOrderEl = document.getElementById("min-order-val");
  const deliveryTimeEl = document.getElementById("delivery-time-val");
  const pixKeyEl = document.getElementById("pix-key-val");
  const pixNameEl = document.getElementById("pix-name-val");

  if (nameEl) nameEl.textContent = STORE_CONFIG.name;
  if (sloganEl) sloganEl.textContent = STORE_CONFIG.slogan;
  if (statusEl) statusEl.textContent = STORE_CONFIG.statusLabel;
  if (minOrderEl) minOrderEl.textContent = formatCurrency(STORE_CONFIG.minOrder);
  if (deliveryTimeEl) deliveryTimeEl.textContent = `${STORE_CONFIG.deliveryTimeMin}-${STORE_CONFIG.deliveryTimeMax} min`;
  if (pixKeyEl) pixKeyEl.textContent = STORE_CONFIG.pixKey;
  if (pixNameEl) pixNameEl.textContent = STORE_CONFIG.pixName;

  const supportLink = document.getElementById("support-whatsapp-link");
  if (supportLink) supportLink.href = `https://wa.me/${STORE_CONFIG.whatsapp}`;
}

// 2. RENDERIZAR ABAS DE CATEGORIAS
function renderCategoriesNav() {
  const navContainer = document.getElementById("categories-nav");
  if (!navContainer) return;

  navContainer.innerHTML = "";

  CATEGORIES.forEach((cat, index) => {
    const btn = document.createElement("button");
    btn.className = `cat-tab ${index === 0 ? "active" : ""}`;
    btn.dataset.catId = cat.id;
    btn.innerHTML = `
      <span>${cat.emoji || "🍽️"}</span>
      <span>${cat.name}</span>
      <span class="cat-badge">${cat.count}</span>
    `;

    btn.addEventListener("click", () => {
      document.querySelectorAll(".cat-tab").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const targetBlock = document.getElementById(cat.id);
      if (targetBlock) {
        targetBlock.scrollIntoView({ behavior: "smooth" });
      }
    });

    navContainer.appendChild(btn);
  });
}

// 3. RENDERIZAR CATÁLOGO DE PRODUTOS
function renderProductCatalog() {
  const catalogContainer = document.getElementById("catalog-container");
  if (!catalogContainer) return;

  catalogContainer.innerHTML = "";

  const query = AppState.searchQuery.toLowerCase().trim();
  let totalMatches = 0;

  CATEGORIES.forEach(cat => {
    const productsInCat = PRODUCTS.filter(p => {
      const matchCat = p.categoryId === cat.id;
      if (!matchCat) return false;
      if (!query) return true;
      return (
        p.name.toLowerCase().includes(query) ||
        (p.description && p.description.toLowerCase().includes(query))
      );
    });

    if (productsInCat.length === 0) return;

    totalMatches += productsInCat.length;

    const block = document.createElement("section");
    block.className = "category-block";
    block.id = cat.id;

    block.innerHTML = `
      <div class="category-header">
        <h2 class="category-title">
          <span>${cat.emoji || "🍽️"}</span> ${cat.name}
        </h2>
        <span class="category-count">${productsInCat.length} ${productsInCat.length === 1 ? "item" : "itens"}</span>
      </div>
      <div class="products-grid" id="grid-${cat.id}"></div>
    `;

    const grid = block.querySelector(`#grid-${cat.id}`);

    productsInCat.forEach(prod => {
      const card = createProductCard(prod);
      grid.appendChild(card);
    });

    catalogContainer.appendChild(block);
  });

  if (totalMatches === 0 && query) {
    catalogContainer.innerHTML = `
      <div class="empty-search">
        <div class="empty-search-icon">🔍</div>
        <h3>Nenhum produto encontrado</h3>
        <p>Não encontramos resultados para "<strong>${escapeHtml(query)}</strong>". Tente buscar por outros termos como "salada", "kikão" ou "pizza".</p>
      </div>
    `;
  }
}

// CRIAR CARD DE PRODUTO INDIVIDUAL
function createProductCard(prod) {
  const card = document.createElement("div");
  card.className = "product-card";
  card.dataset.id = prod.id;

  const hasImg = prod.image && prod.image.trim().length > 0;
  const badgeHtml = prod.badge ? `<span class="product-badge">${escapeHtml(prod.badge)}</span>` : "";

  card.innerHTML = `
    <div class="product-info">
      <div>
        <h3 class="product-title">${escapeHtml(prod.name)}</h3>
        <p class="product-desc">${escapeHtml(prod.description || "Delicioso e preparado na hora com os melhores ingredientes.")}</p>
      </div>
      <div class="product-bottom">
        <span class="product-price">${formatCurrency(prod.price)}</span>
        <button class="btn-add-quick" title="Ver detalhes do produto">
          <span>+</span> Adicionar
        </button>
      </div>
    </div>
    <div class="product-img-box">
      ${badgeHtml}
      ${hasImg ? `
        <img
          class="product-img"
          src="${escapeHtml(prod.image)}"
          alt="${escapeHtml(prod.name)}"
          loading="lazy"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
        />
        <div class="product-img-fallback" style="display: none;">🍔</div>
      ` : `
        <div class="product-img-fallback">🍔</div>
      `}
    </div>
  `;

  card.addEventListener("click", () => openProductModal(prod));

  return card;
}

// 4. RENDERIZAR OPÇÕES DE BAIRROS
function renderNeighborhoodsSelect() {
  const select = document.getElementById("select-neighborhood");
  if (!select) return;

  select.innerHTML = '<option value="">-- Selecione seu bairro --</option>';

  NEIGHBORHOODS.forEach(b => {
    const opt = document.createElement("option");
    opt.value = b.id;
    opt.textContent = `${b.name} (Taxa: ${formatCurrency(b.fee)})`;
    select.appendChild(opt);
  });
}

// 5. MODAL DE PRODUTO (BOTTOM SHEET)
function openProductModal(prod) {
  AppState.modalItem = prod;
  AppState.modalQuantity = 1;

  const modal = document.getElementById("product-modal");
  const modalImg = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");
  const modalDesc = document.getElementById("modal-desc");
  const modalPrice = document.getElementById("modal-price");
  const modalQty = document.getElementById("modal-qty");
  const modalObs = document.getElementById("modal-obs");

  if (!modal) return;

  if (prod.image) {
    modalImg.src = prod.image;
    modalImg.style.display = "block";
  } else {
    modalImg.style.display = "none";
  }

  modalTitle.textContent = prod.name;
  modalDesc.textContent = prod.description || "Delicioso e preparado na hora com todo o capricho!";
  modalPrice.textContent = formatCurrency(prod.price);
  modalQty.textContent = "1";
  modalObs.value = "";

  updateModalTotal();

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeProductModal() {
  const modal = document.getElementById("product-modal");
  if (modal) {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }
}

function updateModalTotal() {
  const btnSubmit = document.getElementById("btn-modal-add");
  const modalQty = document.getElementById("modal-qty");
  if (!AppState.modalItem) return;

  const total = AppState.modalItem.price * AppState.modalQuantity;
  if (modalQty) modalQty.textContent = AppState.modalQuantity;
  if (btnSubmit) {
    btnSubmit.innerHTML = `
      <span>Adicionar</span>
      <span>${formatCurrency(total)}</span>
    `;
  }
}

// 6. GESTÃO DA SACOLA (CARRINHO)
function addToCart(product, quantity, observation) {
  const existingIndex = AppState.cart.findIndex(
    item => item.product.id === product.id && item.observation === observation
  );

  if (existingIndex > -1) {
    AppState.cart[existingIndex].quantity += quantity;
  } else {
    AppState.cart.push({
      product,
      quantity,
      observation
    });
  }

  updateCartUI();
  showToast(`"${product.name}" adicionado à sacola!`);
  closeProductModal();
}

function updateCartItemQuantity(index, delta) {
  if (!AppState.cart[index]) return;

  AppState.cart[index].quantity += delta;

  if (AppState.cart[index].quantity <= 0) {
    AppState.cart.splice(index, 1);
    showToast("Item removido da sacola.");
  }

  updateCartUI();
}

function removeCartItem(index) {
  if (!AppState.cart[index]) return;
  AppState.cart.splice(index, 1);
  updateCartUI();
  showToast("Item removido da sacola.");
}

function updateCartUI() {
  const floatingBar = document.getElementById("floating-cart-bar");
  const floatingTotal = document.getElementById("floating-cart-total");
  const floatingCount = document.getElementById("floating-cart-count");
  const cartList = document.getElementById("cart-items-container");
  const cartEmpty = document.getElementById("cart-empty-state");

  const itemsCount = AppState.cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = AppState.cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  if (floatingBar) {
    if (itemsCount > 0) {
      floatingBar.classList.add("visible");
      if (floatingTotal) floatingTotal.textContent = formatCurrency(subtotal);
      if (floatingCount) floatingCount.textContent = `${itemsCount} ${itemsCount === 1 ? "item" : "itens"}`;
    } else {
      floatingBar.classList.remove("visible");
    }
  }

  if (cartList && cartEmpty) {
    if (itemsCount === 0) {
      cartEmpty.style.display = "block";
      cartList.innerHTML = "";
    } else {
      cartEmpty.style.display = "none";
      cartList.innerHTML = "";

      AppState.cart.forEach((item, index) => {
        const itemEl = document.createElement("div");
        itemEl.className = "cart-item";
        const itemTotal = item.product.price * item.quantity;

        itemEl.innerHTML = `
          <div class="cart-item-info">
            <h4 class="cart-item-name">${escapeHtml(item.product.name)}</h4>
            ${item.observation ? `<p class="cart-item-obs">Obs: ${escapeHtml(item.observation)}</p>` : ""}
            <div class="cart-item-price">${formatCurrency(itemTotal)}</div>
          </div>
          <div class="cart-item-actions">
            <button class="cart-qty-btn" onclick="updateCartItemQuantity(${index}, -1)">-</button>
            <span class="cart-qty-value">${item.quantity}</span>
            <button class="cart-qty-btn" onclick="updateCartItemQuantity(${index}, 1)">+</button>
            <button class="cart-item-remove" onclick="removeCartItem(${index})" title="Excluir item">🗑️</button>
          </div>
        `;
        cartList.appendChild(itemEl);
      });
    }
  }

  updateFinancialSummary();
}

function updateFinancialSummary() {
  const subtotalEl = document.getElementById("summary-subtotal");
  const deliveryFeeEl = document.getElementById("summary-delivery-fee");
  const discountRow = document.getElementById("row-discount");
  const discountEl = document.getElementById("summary-discount");
  const cardTaxEl = document.getElementById("summary-card-tax");
  const cardTaxRow = document.getElementById("row-card-tax");
  const totalEl = document.getElementById("summary-total");
  const btnWhatsapp = document.getElementById("btn-submit-order");

  const subtotal = AppState.cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  // Taxa de entrega
  let deliveryFee = 0;
  if (AppState.deliveryType === "delivery") {
    if (AppState.appliedCoupon && AppState.appliedCoupon.type === "FREE_SHIPPING") {
      deliveryFee = 0;
    } else if (AppState.selectedNeighborhood) {
      deliveryFee = AppState.selectedNeighborhood.fee;
    } else {
      deliveryFee = STORE_CONFIG.defaultDeliveryFee;
    }
  }

  // Desconto de cupom
  let discount = 0;
  if (AppState.appliedCoupon && subtotal > 0) {
    if (AppState.appliedCoupon.type === "FIXED") {
      discount = AppState.appliedCoupon.value;
    } else if (AppState.appliedCoupon.type === "PERCENT") {
      discount = subtotal * AppState.appliedCoupon.value;
    }
  }

  if (discount > subtotal) discount = subtotal;

  if (discountRow && discountEl) {
    if (discount > 0 || (AppState.appliedCoupon && AppState.appliedCoupon.type === "FREE_SHIPPING")) {
      discountRow.style.display = "flex";
      discountEl.textContent = AppState.appliedCoupon.type === "FREE_SHIPPING" ? "Frete Grátis" : `- ${formatCurrency(discount)}`;
    } else {
      discountRow.style.display = "none";
    }
  }

  // Taxa de cartão
  let cardTax = 0;
  if (AppState.paymentMethod === "credit") {
    cardTax = STORE_CONFIG.cardCreditTax;
  } else if (AppState.paymentMethod === "debit") {
    cardTax = STORE_CONFIG.cardDebitTax;
  }

  const grandTotal = Math.max(0, subtotal - discount) + deliveryFee + cardTax;

  if (subtotalEl) subtotalEl.textContent = formatCurrency(subtotal);
  if (deliveryFeeEl) deliveryFeeEl.textContent = AppState.deliveryType === "pickup" ? "Grátis" : (deliveryFee === 0 && AppState.appliedCoupon?.type === "FREE_SHIPPING" ? "Grátis (Cupom)" : formatCurrency(deliveryFee));

  if (cardTaxRow) {
    if (cardTax > 0) {
      cardTaxRow.style.display = "flex";
      if (cardTaxEl) cardTaxEl.textContent = formatCurrency(cardTax);
    } else {
      cardTaxRow.style.display = "none";
    }
  }

  if (totalEl) totalEl.textContent = formatCurrency(grandTotal);

  if (btnWhatsapp) {
    btnWhatsapp.disabled = subtotal < STORE_CONFIG.minOrder;
    if (subtotal < STORE_CONFIG.minOrder && subtotal > 0) {
      btnWhatsapp.textContent = `Pedido mínimo é ${formatCurrency(STORE_CONFIG.minOrder)}`;
    } else {
      btnWhatsapp.innerHTML = `<span>Finalizar no WhatsApp</span> <span>👉</span>`;
    }
  }
}

// 7. GAVETA DA SACOLA (DRAWER)
function openCartDrawer() {
  const drawerBackdrop = document.getElementById("cart-drawer-backdrop");
  if (drawerBackdrop) {
    drawerBackdrop.classList.add("open");
    document.body.style.overflow = "hidden";
  }
}

function closeCartDrawer() {
  const drawerBackdrop = document.getElementById("cart-drawer-backdrop");
  if (drawerBackdrop) {
    drawerBackdrop.classList.remove("open");
    document.body.style.overflow = "";
  }
}

// 8. CUPONS
function applyCoupon(code, value, isPercent = false) {
  if (value === "FREE_SHIPPING") {
    AppState.appliedCoupon = { code, type: "FREE_SHIPPING" };
  } else if (isPercent) {
    AppState.appliedCoupon = { code, value, type: "PERCENT" };
  } else {
    AppState.appliedCoupon = { code, value, type: "FIXED" };
  }

  updateFinancialSummary();
  closeAllTabModals();
  showToast(`Cupom ${code} aplicado com sucesso!`);
}

// 9. PERFIL E LOCALSTORAGE
function loadSavedProfile() {
  try {
    const saved = localStorage.getItem("chapa_quente_profile");
    if (saved) {
      const data = JSON.parse(saved);
      if (data.name) {
        const custName = document.getElementById("input-customer-name");
        const profName = document.getElementById("profile-input-name");
        const dispName = document.getElementById("profile-display-name");
        if (custName) custName.value = data.name;
        if (profName) profName.value = data.name;
        if (dispName) dispName.textContent = data.name;
      }
      if (data.phone) {
        const custPhone = document.getElementById("input-customer-phone");
        const profPhone = document.getElementById("profile-input-phone");
        if (custPhone) custPhone.value = data.phone;
        if (profPhone) profPhone.value = data.phone;
      }
    }
  } catch (e) {
    console.error(e);
  }
}

function saveProfileData() {
  const name = document.getElementById("profile-input-name")?.value.trim();
  const phone = document.getElementById("profile-input-phone")?.value.trim();

  if (!name) {
    alert("Digite seu nome completo.");
    return;
  }

  try {
    localStorage.setItem("chapa_quente_profile", JSON.stringify({ name, phone }));
    loadSavedProfile();
    showToast("Dados salvos com sucesso!");
    closeAllTabModals();
  } catch (e) {
    console.error(e);
  }
}

// 10. HISTÓRICO DE PEDIDOS
function saveOrderToHistory(orderData) {
  try {
    const pastOrders = JSON.parse(localStorage.getItem("chapa_quente_orders") || "[]");
    pastOrders.unshift(orderData);
    localStorage.setItem("chapa_quente_orders", JSON.stringify(pastOrders.slice(0, 10)));
    renderPastOrders();
  } catch (e) {
    console.error(e);
  }
}

function renderPastOrders() {
  const container = document.querySelector("#modal-orders .tab-sheet-body");
  if (!container) return;

  try {
    const pastOrders = JSON.parse(localStorage.getItem("chapa_quente_orders") || "[]");
    if (pastOrders.length === 0) {
      container.innerHTML = `
        <div class="cart-empty">
          <div class="cart-empty-icon">📋</div>
          <h4>Nenhum pedido recente</h4>
          <p>Seus pedidos finalizados aparecerão aqui para você acompanhar e pedir novamente!</p>
        </div>
      `;
      return;
    }

    container.innerHTML = "";
    pastOrders.forEach((ord, i) => {
      const el = document.createElement("div");
      el.className = "cart-item";
      el.style.flexDirection = "column";
      el.style.alignItems = "stretch";
      el.innerHTML = `
        <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--gray-200); padding-bottom: 6px; margin-bottom: 6px;">
          <strong style="font-size: 0.88rem; color: var(--dark);">Pedido #${ord.id || (1000 + i)}</strong>
          <span style="font-size: 0.75rem; color: var(--gray-500);">${escapeHtml(ord.date || "")}</span>
        </div>
        <p style="font-size: 0.8rem; color: var(--gray-600); margin-bottom: 4px;">${escapeHtml(ord.summary || "")}</p>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 4px;">
          <strong style="font-size: 0.95rem; color: var(--primary);">${formatCurrency(ord.total)}</strong>
          <span style="font-size: 0.72rem; background: #dcfce7; color: #15803d; font-weight: 600; padding: 2px 8px; border-radius: 999px;">Enviado WhatsApp</span>
        </div>
      `;
      container.appendChild(el);
    });
  } catch (e) {
    console.error(e);
  }
}

// 11. CONTROLE DAS ABAS INFERIORES (BOTTOM TABS)
function initBottomTabs() {
  const tabHome = document.getElementById("tab-nav-home");
  const tabOrders = document.getElementById("tab-nav-orders");
  const tabCoupons = document.getElementById("tab-nav-coupons");
  const tabProfile = document.getElementById("tab-nav-profile");

  tabHome?.addEventListener("click", () => {
    setActiveBottomTab("home");
    closeAllTabModals();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  tabOrders?.addEventListener("click", () => {
    setActiveBottomTab("orders");
    closeAllTabModals();
    document.getElementById("modal-orders")?.classList.add("open");
    document.body.style.overflow = "hidden";
  });

  tabCoupons?.addEventListener("click", () => {
    setActiveBottomTab("coupons");
    closeAllTabModals();
    document.getElementById("modal-coupons")?.classList.add("open");
    document.body.style.overflow = "hidden";
  });

  tabProfile?.addEventListener("click", () => {
    setActiveBottomTab("profile");
    closeAllTabModals();
    document.getElementById("modal-profile")?.classList.add("open");
    document.body.style.overflow = "hidden";
  });

  // Fechar botões dos modais
  document.getElementById("btn-close-orders")?.addEventListener("click", closeAllTabModals);
  document.getElementById("btn-close-coupons")?.addEventListener("click", closeAllTabModals);
  document.getElementById("btn-close-profile")?.addEventListener("click", closeAllTabModals);

  // Fechar ao clicar no backdrop
  document.querySelectorAll(".tab-sheet-modal").forEach(modal => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeAllTabModals();
    });
  });

  document.getElementById("btn-save-profile")?.addEventListener("click", saveProfileData);
}

function setActiveBottomTab(tabName) {
  AppState.currentTab = tabName;
  document.querySelectorAll(".tab-nav-item").forEach(t => t.classList.remove("active"));

  if (tabName === "home") document.getElementById("tab-nav-home")?.classList.add("active");
  else if (tabName === "orders") document.getElementById("tab-nav-orders")?.classList.add("active");
  else if (tabName === "coupons") document.getElementById("tab-nav-coupons")?.classList.add("active");
  else if (tabName === "profile") document.getElementById("tab-nav-profile")?.classList.add("active");
}

function closeAllTabModals() {
  document.querySelectorAll(".tab-sheet-modal").forEach(m => m.classList.remove("open"));
  document.body.style.overflow = "";
  setActiveBottomTab("home");
}

// 12. FINALIZAR PEDIDO NO WHATSAPP
function submitOrderToWhatsApp() {
  const subtotal = AppState.cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  if (subtotal < STORE_CONFIG.minOrder) {
    showToast(`O valor mínimo do pedido é de ${formatCurrency(STORE_CONFIG.minOrder)}.`);
    return;
  }

  const customerName = document.getElementById("input-customer-name")?.value.trim();
  const customerPhone = document.getElementById("input-customer-phone")?.value.trim();

  if (!customerName) {
    alert("Por favor, digite seu Nome Completo.");
    document.getElementById("input-customer-name")?.focus();
    return;
  }

  let addressText = "";
  let deliveryFee = 0;

  if (AppState.deliveryType === "delivery") {
    const neighborhoodId = document.getElementById("select-neighborhood")?.value;
    const street = document.getElementById("input-address-street")?.value.trim();
    const number = document.getElementById("input-address-num")?.value.trim();
    const complement = document.getElementById("input-address-comp")?.value.trim();
    const ref = document.getElementById("input-address-ref")?.value.trim();

    if (!neighborhoodId) {
      alert("Por favor, selecione o seu Bairro para entrega.");
      document.getElementById("select-neighborhood")?.focus();
      return;
    }

    if (!street || !number) {
      alert("Por favor, informe a Rua e o Número da sua residência.");
      document.getElementById("input-address-street")?.focus();
      return;
    }

    if (AppState.appliedCoupon && AppState.appliedCoupon.type === "FREE_SHIPPING") {
      deliveryFee = 0;
    } else {
      deliveryFee = AppState.selectedNeighborhood ? AppState.selectedNeighborhood.fee : STORE_CONFIG.defaultDeliveryFee;
    }

    const bName = AppState.selectedNeighborhood ? AppState.selectedNeighborhood.name : "Não especificado";

    addressText = `*🛵 TIPO:* Entrega (Delivery)\n*📍 ENDEREÇO:* ${street}, Nº ${number}\n*🏘️ BAIRRO:* ${bName}${complement ? ` (${complement})` : ""}${ref ? `\n*🧭 PONTO DE REF.:* ${ref}` : ""}`;
  } else {
    addressText = `*🏪 TIPO:* Retirada no Balcão\n*📍 RETIRAR EM:* ${STORE_CONFIG.name}\n_Confirme o endereço de retirada pelo WhatsApp._`;
  }

  // Desconto
  let discount = 0;
  let couponText = "";
  if (AppState.appliedCoupon) {
    if (AppState.appliedCoupon.type === "FIXED") {
      discount = AppState.appliedCoupon.value;
      couponText = `\n🎟️ *CUPOM:* ${AppState.appliedCoupon.code} (- ${formatCurrency(discount)})`;
    } else if (AppState.appliedCoupon.type === "PERCENT") {
      discount = subtotal * AppState.appliedCoupon.value;
      couponText = `\n🎟️ *CUPOM:* ${AppState.appliedCoupon.code} (- ${formatCurrency(discount)})`;
    } else if (AppState.appliedCoupon.type === "FREE_SHIPPING") {
      couponText = `\n🎟️ *CUPOM:* ${AppState.appliedCoupon.code} (Frete Grátis)`;
    }
  }

  // Pagamento
  let paymentText = "";
  let cardTax = 0;

  if (AppState.paymentMethod === "pix") {
    paymentText = `*💳 FORMA DE PAGAMENTO:* PIX\n*(Chave: ${STORE_CONFIG.pixKey} - ${STORE_CONFIG.pixName})*\n_Obs: Envie o comprovante em anexo._`;
  } else if (AppState.paymentMethod === "credit") {
    cardTax = STORE_CONFIG.cardCreditTax;
    paymentText = `*💳 FORMA DE PAGAMENTO:* Cartão de Crédito (+ ${formatCurrency(cardTax)})`;
  } else if (AppState.paymentMethod === "debit") {
    cardTax = STORE_CONFIG.cardDebitTax;
    paymentText = `*💳 FORMA DE PAGAMENTO:* Cartão de Débito (+ ${formatCurrency(cardTax)})`;
  } else if (AppState.paymentMethod === "cash") {
    const changeVal = document.getElementById("input-cash-change")?.value.trim();
    paymentText = `*💵 FORMA DE PAGAMENTO:* Dinheiro${changeVal ? ` (Troco para ${changeVal})` : " (Não precisa de troco)"}`;
  }

  const grandTotal = Math.max(0, subtotal - discount) + deliveryFee + cardTax;

  // Itens formatados
  let itemsMessage = "";
  let summaryShort = [];
  AppState.cart.forEach((it) => {
    const itemTotal = it.product.price * it.quantity;
    itemsMessage += `• *${it.quantity}x* ${it.product.name} - ${formatCurrency(itemTotal)}\n`;
    summaryShort.push(`${it.quantity}x ${it.product.name}`);
    if (it.observation) {
      itemsMessage += `   ↳ _Obs: ${it.observation}_\n`;
    }
  });

  // Salvar no histórico local
  const now = new Date();
  const dateFormatted = `${now.toLocaleDateString('pt-BR')} às ${now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}`;
  saveOrderToHistory({
    id: Math.floor(1000 + Math.random() * 9000),
    date: dateFormatted,
    summary: summaryShort.join(", "),
    total: grandTotal
  });

  // Salvar perfil do cliente
  try {
    localStorage.setItem("chapa_quente_profile", JSON.stringify({ name: customerName, phone: customerPhone }));
  } catch (e) {}

  // Mensagem Completa
  const fullMessage =
`🍔 *NOVO PEDIDO - ${STORE_CONFIG.name.toUpperCase()}*
━━━━━━━━━━━━━━━━━━━━
👤 *CLIENTE:* ${customerName}
📱 *WHATSAPP:* ${customerPhone || "Não informado"}

📋 *ITENS DO PEDIDO:*
${itemsMessage}
━━━━━━━━━━━━━━━━━━━━
${addressText}

${paymentText}
━━━━━━━━━━━━━━━━━━━━
💰 *Subtotal:* ${formatCurrency(subtotal)}
🛵 *Taxa de Entrega:* ${AppState.deliveryType === "pickup" ? "Grátis" : formatCurrency(deliveryFee)}${couponText}
${cardTax > 0 ? `💳 *Taxa Maquininha:* ${formatCurrency(cardTax)}\n` : ""}⭐ *TOTAL GERAL: ${formatCurrency(grandTotal)}*
━━━━━━━━━━━━━━━━━━━━
_Pedido realizado pelo Cardápio Digital_`;

  const encodedUrl = `https://wa.me/${STORE_CONFIG.whatsapp}?text=${encodeURIComponent(fullMessage)}`;
  window.open(encodedUrl, "_blank");
}

// 13. EVENT LISTENERS
function initEventListeners() {
  const searchInput = document.getElementById("search-input");
  const searchClear = document.getElementById("search-clear");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      AppState.searchQuery = e.target.value;
      if (searchClear) {
        searchClear.classList.toggle("visible", e.target.value.length > 0);
      }
      renderProductCatalog();
    });
  }

  if (searchClear) {
    searchClear.addEventListener("click", () => {
      if (searchInput) {
        searchInput.value = "";
        AppState.searchQuery = "";
        searchClear.classList.remove("visible");
        renderProductCatalog();
      }
    });
  }

  // Modal de produto
  document.getElementById("btn-modal-close")?.addEventListener("click", closeProductModal);
  document.getElementById("product-modal")?.addEventListener("click", (e) => {
    if (e.target.id === "product-modal") closeProductModal();
  });

  document.getElementById("btn-modal-minus")?.addEventListener("click", () => {
    if (AppState.modalQuantity > 1) {
      AppState.modalQuantity--;
      updateModalTotal();
    }
  });

  document.getElementById("btn-modal-plus")?.addEventListener("click", () => {
    AppState.modalQuantity++;
    updateModalTotal();
  });

  document.getElementById("btn-modal-add")?.addEventListener("click", () => {
    if (!AppState.modalItem) return;
    const obs = document.getElementById("modal-obs")?.value.trim() || "";
    addToCart(AppState.modalItem, AppState.modalQuantity, obs);
  });

  // Drawer da Sacola
  document.getElementById("floating-cart-btn")?.addEventListener("click", openCartDrawer);
  document.getElementById("btn-drawer-close")?.addEventListener("click", closeCartDrawer);
  document.getElementById("cart-drawer-backdrop")?.addEventListener("click", (e) => {
    if (e.target.id === "cart-drawer-backdrop") closeCartDrawer();
  });

  // Toggle Entrega / Retirada
  const toggleDelivery = document.getElementById("toggle-delivery");
  const togglePickup = document.getElementById("toggle-pickup");
  const addressContainer = document.getElementById("delivery-address-container");

  toggleDelivery?.addEventListener("click", () => {
    AppState.deliveryType = "delivery";
    toggleDelivery.classList.add("active");
    togglePickup?.classList.remove("active");
    if (addressContainer) addressContainer.style.display = "block";
    updateFinancialSummary();
  });

  togglePickup?.addEventListener("click", () => {
    AppState.deliveryType = "pickup";
    togglePickup.classList.add("active");
    toggleDelivery?.classList.remove("active");
    if (addressContainer) addressContainer.style.display = "none";
    updateFinancialSummary();
  });

  // Mudança de Bairro
  document.getElementById("select-neighborhood")?.addEventListener("change", (e) => {
    const selectedId = Number(e.target.value);
    AppState.selectedNeighborhood = NEIGHBORHOODS.find(b => b.id === selectedId) || null;
    updateFinancialSummary();
  });

  // Opções de Pagamento
  document.querySelectorAll(".payment-card").forEach(card => {
    card.addEventListener("click", () => {
      document.querySelectorAll(".payment-card").forEach(c => c.classList.remove("active"));
      card.classList.add("active");

      const method = card.dataset.method;
      AppState.paymentMethod = method;

      const pixBox = document.getElementById("pix-container");
      const cashBox = document.getElementById("cash-container");

      if (pixBox) pixBox.classList.toggle("visible", method === "pix");
      if (cashBox) cashBox.style.display = method === "cash" ? "block" : "none";

      updateFinancialSummary();
    });
  });

  // Copiar PIX
  document.getElementById("btn-copy-pix")?.addEventListener("click", () => {
    navigator.clipboard.writeText(STORE_CONFIG.pixKey).then(() => {
      showToast("Chave PIX copiada para a área de transferência!");
    }).catch(() => {
      showToast("Chave PIX: " + STORE_CONFIG.pixKey);
    });
  });

  // Finalizar Pedido
  document.getElementById("btn-submit-order")?.addEventListener("click", submitOrderToWhatsApp);
}

// 14. SCROLL SPY PARA CATEGORIAS ATIVAS
function initScrollSpy() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        document.querySelectorAll(".cat-tab").forEach(tab => {
          const isActive = tab.dataset.catId === id;
          tab.classList.toggle("active", isActive);
          if (isActive) {
            tab.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
          }
        });
      }
    });
  }, {
    rootMargin: "-20% 0px -70% 0px"
  });

  document.querySelectorAll(".category-block").forEach(block => observer.observe(block));
}

// 15. TOAST NOTIFICATIONS
function showToast(message) {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span>✨</span><span>${escapeHtml(message)}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(-10px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

// ESCAPAR HTML
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
