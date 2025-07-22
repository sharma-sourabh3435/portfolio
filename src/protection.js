// Anti-debugging and inspection protection
(function() {
//   'use strict';
  
  const _0x1a2b = ['contextmenu', 'keydown', 'preventDefault', 'ctrlKey', 'shiftKey', 'keyCode'];
  const _0x3c4d = document;
  const _0x5e6f = window;
  
  // Disable right-click
  _0x3c4d.addEventListener(_0x1a2b[0], function(e) {
    e[_0x1a2b[2]]();
    return false;
  });

  // Disable dev shortcuts
  _0x3c4d.addEventListener(_0x1a2b[1], function(e) {
    const kc = e[_0x1a2b[5]];
    const ctrl = e[_0x1a2b[3]];
    const shift = e[_0x1a2b[4]];
    
    if (kc === 123 || 
        (ctrl && shift && kc === 73) || 
        (ctrl && shift && kc === 74) || 
        (ctrl && kc === 85)) {
      e[_0x1a2b[2]]();
      return false;
    }
  });

  // DevTools detection
  let dt = { o: false };
  const th = 160;
  
  const check = () => {
    const heightDiff = _0x5e6f.outerHeight - _0x5e6f.innerHeight;
    const widthDiff = _0x5e6f.outerWidth - _0x5e6f.innerWidth;
    
    if (heightDiff > th || widthDiff > th) {
      if (!dt.o) {
        dt.o = true;
        console.clear();
        // Less aggressive - just blur the content
        _0x3c4d.body.style.filter = 'blur(5px)';
        _0x3c4d.body.style.pointerEvents = 'none';
        
        setTimeout(() => {
          if (dt.o) {
            _0x3c4d.body.innerHTML = `
              <div style="display:flex;justify-content:center;align-items:center;height:100vh;font-family:Arial;background:#f5f5f5;">
                <div style="text-align:center;padding:2rem;background:white;border-radius:8px;box-shadow:0 4px 6px rgba(0,0,0,0.1);">
                  <h2 style="color:#BF9B9F;margin-bottom:1rem;">⚠️ Developer Tools Detected</h2>
                  <p style="color:#666;">Please close developer tools to view the portfolio.</p>
                  <button onclick="window.location.reload()" style="background:#BF9B9F;color:white;border:none;padding:0.5rem 1rem;border-radius:4px;cursor:pointer;margin-top:1rem;">Reload Page</button>
                </div>
              </div>`;
          }
        }, 1000);
      }
    } else {
      if (dt.o) {
        _0x5e6f.location.reload();
      }
    }
  };
  
  setInterval(check, 1000);

  // Disable text selection and drag
  _0x3c4d.onselectstart = () => false;
  _0x3c4d.onmousedown = () => false;
  _0x3c4d.ondragstart = () => false;

  // Console warnings
  const styles = [
    'color: #ff0000; font-size: 40px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);',
    'color: #ff4444; font-size: 14px; font-weight: bold;'
  ];
  
  console.log('%c🛑 STOP!', styles[0]);
  console.log('%cThis portfolio is protected. Unauthorized code inspection is prohibited.', styles[1]);
  console.log('%cIf you\'re interested in the code, please contact me directly!', 'color: #BF9B9F; font-size: 12px;');

  // Disable copy
  _0x3c4d.addEventListener('copy', function(e) {
    e.clipboardData.setData('text/plain', '⚠️ Content copying is disabled');
    e[_0x1a2b[2]]();
  });

  // Disable print
  _0x5e6f.addEventListener('beforeprint', function(e) {
    e[_0x1a2b[2]]();
    alert('Printing is disabled for this portfolio.');
  });

  // Clear console periodically
  setInterval(() => {
    console.clear();
    console.log('%c🔒 Portfolio Protected', 'color: #BF9B9F; font-size: 12px;');
  }, 3000);

})();
