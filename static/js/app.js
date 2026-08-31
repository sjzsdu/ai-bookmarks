(function () {
  'use strict';

  // ---------- Theme toggle ----------
  var root = document.documentElement;
  var toggle = document.querySelector('.theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('aib-theme', next); } catch (e) {}
    });
  }

  // ---------- Storage helpers ----------
  function read(key) {
    try { return JSON.parse(localStorage.getItem(key)) || []; } catch (e) { return []; }
  }
  function write(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {}
  }
  var lang = (document.documentElement.lang || 'zh').slice(0, 2);
  var t = {
    saved: lang === 'zh' ? '★ 已收藏' : '★ Saved',
    save: lang === 'zh' ? '☆ 收藏' : '☆ Save',
    inCompare: lang === 'zh' ? '✓ 对比中' : '✓ Comparing',
    addCompare: lang === 'zh' ? '＋ 对比' : '＋ Compare',
    remove: lang === 'zh' ? '移除' : 'Remove',
    free: lang === 'zh' ? '免费' : 'Free',
    accessDirect: lang === 'zh' ? '国内可直连' : 'Direct in CN',
    accessProxy: lang === 'zh' ? '国内需代理' : 'Proxy in CN',
    emptyFav: lang === 'zh' ? '还没有收藏任何工具。' : 'You haven\'t saved any tools yet.',
    emptyCmp: lang === 'zh' ? '还没有添加要对比的工具。' : 'No tools added to compare yet.'
  };

  // ---------- Favorites ----------
  var FAV = 'aib-fav';
  function isFav(url) { return read(FAV).some(function (x) { return x.url === url; }); }
  function toggleFav(btn) {
    var url = btn.getAttribute('data-tool');
    var list = read(FAV);
    var i = list.findIndex(function (x) { return x.url === url; });
    if (i >= 0) { list.splice(i, 1); } else {
      list.push({
        url: url, title: btn.getAttribute('data-title'),
        category: btn.getAttribute('data-category'), price: btn.getAttribute('data-price'),
        access: btn.getAttribute('data-access')
      });
    }
    write(FAV, list);
    syncFavButtons();
    if (document.getElementById('fav-list')) renderFav();
  }
  function syncFavButtons() {
    document.querySelectorAll('.fav-btn').forEach(function (btn) {
      var on = isFav(btn.getAttribute('data-tool'));
      btn.textContent = on ? t.saved : t.save;
      btn.classList.toggle('active', on);
    });
  }
  document.querySelectorAll('.fav-btn').forEach(function (btn) {
    btn.addEventListener('click', function () { toggleFav(btn); });
  });

  function renderFav() {
    var box = document.getElementById('fav-list');
    var empty = document.getElementById('fav-empty');
    if (!box) return;
    var list = read(FAV);
    box.innerHTML = '';
    if (!list.length) { if (empty) empty.style.display = ''; return; }
    if (empty) empty.style.display = 'none';
    list.forEach(function (x) {
      var a = document.createElement('a');
      a.className = 'card'; a.href = x.url;
      a.innerHTML = '<h3>' + esc(x.title) + ' ★</h3>' +
        (x.category ? '<p>' + esc(x.category) + '</p>' : '') +
        '<div class="card-meta">' + (x.price ? '<span class="card-price">' + esc(x.price) + '</span>' : '') + '</div>';
      box.appendChild(a);
    });
  }

  // ---------- Compare ----------
  var CMP = 'aib-compare';
  var MAX = 4;
  function isCmp(url) { return read(CMP).some(function (x) { return x.url === url; }); }
  function toggleCmp(btn) {
    var url = btn.getAttribute('data-tool');
    var list = read(CMP);
    var i = list.findIndex(function (x) { return x.url === url; });
    if (i >= 0) { list.splice(i, 1); }
    else {
      if (list.length >= MAX) { alert(lang === 'zh' ? '最多对比 4 个' : 'Max 4 to compare'); return; }
      list.push({
        url: url, title: btn.getAttribute('data-title'),
        category: btn.getAttribute('data-category'), price: btn.getAttribute('data-price'),
        access: btn.getAttribute('data-access')
      });
    }
    write(CMP, list);
    syncCmpButtons();
    if (document.getElementById('compare-list')) renderCmp();
  }
  function syncCmpButtons() {
    document.querySelectorAll('.compare-btn').forEach(function (btn) {
      var on = isCmp(btn.getAttribute('data-tool'));
      btn.textContent = on ? t.inCompare : t.addCompare;
      btn.classList.toggle('active', on);
    });
  }
  document.querySelectorAll('.compare-btn').forEach(function (btn) {
    btn.addEventListener('click', function () { toggleCmp(btn); });
  });

  function renderCmp() {
    var box = document.getElementById('compare-list');
    var empty = document.getElementById('compare-empty');
    if (!box) return;
    var list = read(CMP);
    box.innerHTML = '';
    if (!list.length) { if (empty) empty.style.display = ''; return; }
    if (empty) empty.style.display = 'none';
    var tbl = document.createElement('table');
    tbl.className = 'compare-table';
    var rows = [
      { k: lang === 'zh' ? '工具' : 'Tool', get: function (x) { return '<a href="' + x.url + '">' + esc(x.title) + '</a>'; } },
      { k: lang === 'zh' ? '分类' : 'Category', get: function (x) { return esc(x.category || '-'); } },
      { k: lang === 'zh' ? '价格' : 'Price', get: function (x) { return esc(x.price || '-'); } },
      { k: lang === 'zh' ? '国内访问' : 'Access in CN', get: function (x) {
          if (x.access === '直连') return t.accessDirect;
          if (x.access === '需代理') return t.accessProxy;
          return esc(x.access || '-');
        } },
      { k: '', get: function (x) {
          return '<button class="filter-btn" data-url="' + x.url + '">' + t.remove + '</button>';
        } }
    ];
    var thead = '<tr><th></th>' + list.map(function (x) { return '<th>' + esc(x.title) + '</th>'; }).join('') + '</tr>';
    var tbody = rows.map(function (r) {
      return '<tr><th>' + r.k + '</th>' + list.map(function (x) { return '<td>' + r.get(x) + '</td>'; }).join('') + '</tr>';
    }).join('');
    tbl.innerHTML = thead + tbody;
    box.appendChild(tbl);
    tbl.querySelectorAll('button[data-url]').forEach(function (b) {
      b.addEventListener('click', function () {
        var list2 = read(CMP).filter(function (x) { return x.url !== b.getAttribute('data-url'); });
        write(CMP, list2); syncCmpButtons(); renderCmp();
      });
    });
  }

  // ---------- List filter ----------
  var filterBar = document.getElementById('tool-filter');
  var listBox = document.getElementById('tool-list');
  if (filterBar && listBox) {
    var mode = 'all', sort = 'default';
    filterBar.querySelectorAll('.filter-btn').forEach(function (b) {
      b.addEventListener('click', function () {
        if (b.hasAttribute('data-filter')) {
          mode = b.getAttribute('data-filter');
          filterBar.querySelectorAll('[data-filter]').forEach(function (x) { x.classList.remove('active'); });
        } else if (b.hasAttribute('data-sort')) {
          sort = b.getAttribute('data-sort');
          filterBar.querySelectorAll('[data-sort]').forEach(function (x) { x.classList.remove('active'); });
        }
        b.classList.add('active');
        applyFilter();
      });
    });
    function applyFilter() {
      var cards = Array.prototype.slice.call(listBox.querySelectorAll('.card'));
      cards.forEach(function (c) {
        var free = c.getAttribute('data-free') === '1';
        var show = mode === 'all' || (mode === 'free' && free) || (mode === 'paid' && !free);
        c.style.display = show ? '' : 'none';
      });
      if (sort === 'title') {
        cards.sort(function (a, b) {
          return a.querySelector('h3').textContent.localeCompare(b.querySelector('h3').textContent, lang);
        });
        cards.forEach(function (c) { listBox.appendChild(c); });
      }
    }
  }

  // ---------- Init ----------
  syncFavButtons();
  syncCmpButtons();
  if (document.getElementById('fav-list')) renderFav();
  if (document.getElementById('compare-list')) renderCmp();

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
})();
