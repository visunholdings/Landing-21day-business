const PRICE_LAUNCH_DATE = '2026-09-21';
const PRICE_BASE = 1000000;
const PRICE_DAILY_STEP = 99000;
const PRICE_CAP = 5000000;

function getDaysSincePriceLaunch() {
  const [y, m, d] = PRICE_LAUNCH_DATE.split('-').map(Number);
  const todayParts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Ho_Chi_Minh', year: 'numeric', month: '2-digit', day: '2-digit',
  }).formatToParts(new Date());
  const today = Object.fromEntries(todayParts.map(({ type, value }) => [type, Number(value)]));
  const msPerDay = 24 * 60 * 60 * 1000;
  return Math.max(0, Math.round((Date.UTC(today.year, today.month - 1, today.day) - Date.UTC(y, m - 1, d)) / msPerDay));
}

function getTodayPrice() {
  return Math.min(PRICE_CAP, PRICE_BASE + getDaysSincePriceLaunch() * PRICE_DAILY_STEP);
}

function formatVND(amount) {
  return `${amount.toLocaleString('vi-VN')}đ`;
}

function updatePricingDisplay() {
  const todayPrice = getTodayPrice();
  const tomorrowPrice = Math.min(PRICE_CAP, PRICE_BASE + (getDaysSincePriceLaunch() + 1) * PRICE_DAILY_STEP);
  const atCap = todayPrice >= PRICE_CAP;

  document.querySelectorAll('#price-alert-current').forEach((el) => { el.textContent = formatVND(todayPrice); });
  document.querySelectorAll('#price-current-value').forEach((el) => { el.textContent = todayPrice.toLocaleString('vi-VN'); });

  const alertLine = document.querySelector('#price-alert-line');
  if (alertLine) {
    alertLine.innerHTML = atCap
      ? 'Học phí đã đạt mức chính thức.'
      : `Giá này giữ tới 23:59 giờ Việt Nam hôm nay, ngày mai tăng thêm <strong>${formatVND(PRICE_DAILY_STEP)}</strong>`;
  }

  const increaseNote = document.querySelector('#price-increase-note');
  if (increaseNote) {
    increaseNote.innerHTML = atCap
      ? `Học phí đã đạt mức chính thức ${formatVND(PRICE_CAP)}.`
      : `Từ ngày mai, học phí tăng lên <strong>${formatVND(tomorrowPrice)}</strong>. Đăng ký hôm nay để giữ mức thấp nhất.`;
  }
}

updatePricingDisplay();

const interestForm = document.querySelector('#interest-form');
const formStatus = document.querySelector('#form-status');

if (interestForm && formStatus) {
  interestForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!interestForm.reportValidity()) return;

    const values = new FormData(interestForm);
    const name = String(values.get('name') || '').trim();
    const email = String(values.get('email') || '').trim();
    const role = String(values.get('role') || '').trim();
    const track = String(values.get('track') || '').trim();
    const challenge = String(values.get('challenge') || '').trim();
    const subject = `Đăng ký AI Agent Business 21 Day - ${name}`;
    const body = [
      `Họ tên: ${name}`,
      `Email: ${email}`,
      `Vai trò: ${role || 'Chưa cung cấp'}`,
      `Track đăng ký: ${track}`,
      `Việc muốn dùng AI hỗ trợ: ${challenge || 'Chưa cung cấp'}`,
      'Xác nhận có công việc lặp lại và tối thiểu 3 mẫu dữ liệu: Có',
      'Xác nhận hoàn thành 21/21 nhiệm vụ: Có',
      'Xác nhận video feedback ngày 21 là bắt buộc: Có',
      `Học phí tại thời điểm đăng ký: ${formatVND(getTodayPrice())}`,
      '',
      'Tôi đăng ký tham gia AI Agent Business 21 Day. Vui lòng xác nhận lịch khai giảng và hướng dẫn thanh toán.',
    ].join('\n');

    formStatus.textContent = 'Đang mở email đăng ký. Bấm Gửi trong ứng dụng email để hoàn tất đăng ký của bạn.';
    window.location.href = `mailto:hungtrinhth@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

document.querySelectorAll('.mobile-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    link.closest('details')?.removeAttribute('open');
  });
});

const scrollCta = document.querySelector('.scroll-cta');
const heroSection = document.querySelector('.hero');
const registerSection = document.querySelector('#register');

if (scrollCta && heroSection && registerSection) {
  const updateScrollCta = () => {
    const passedHero = window.scrollY > Math.min(heroSection.offsetHeight * 0.55, 520);
    const registerIsNear = registerSection.getBoundingClientRect().top < window.innerHeight * 0.72;
    scrollCta.classList.toggle('is-visible', passedHero && !registerIsNear);
  };

  window.addEventListener('scroll', updateScrollCta, { passive: true });
  window.addEventListener('resize', updateScrollCta);
  updateScrollCta();
}

const revealSelectors = [
  '.problem-section .section-intro', '.problem-card',
  '.example-copy', '.workflow-card',
  '.method-section .section-intro', '.method-card', '.method-note',
  '.roadmap-section .section-intro', '.phase-card', '.day-accordion > details', '.roadmap-footnote',
  '.completion-grid > div', '.completion-list',
  '.outcomes-section .section-intro', '.outcome-grid article',
  '.tracks-section .section-intro', '.track-card',
  '.founder-grid', '.founder-proof',
  '.fit-section .section-intro', '.fit-panel', '.fit-note',
  '.safety-section > .container > div', '.safety-list',
  '.offer-copy', '.price-card',
  '.faq-grid > div:first-child', '.faq-list details',
  '.cta-ribbon', '.final-copy', '.form-card',
];
const revealEls = document.querySelectorAll(revealSelectors.join(','));

if (revealEls.length && 'IntersectionObserver' in window) {
  revealEls.forEach((el) => el.classList.add('reveal'));
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach((el) => revealObserver.observe(el));
}
