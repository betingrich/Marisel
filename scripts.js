function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

function generateSessionID() {
    const sessionId = 'session_' + Math.random().toString(36).substr(2, 9);
    document.getElementById('session-id').innerText = 'Generated Session ID: ' + sessionId;
}

function generateName() {
    const keyword = document.getElementById('name-input').value;
    const generatedName = keyword + '_' + Math.random().toString(36).substr(2, 5);
    document.getElementById('generated-name').innerText = 'Generated Name: ' + generatedName;
}

function encryptCode() {
    const code = document.getElementById('code-input').value;
    const encryptedCode = btoa(code); // Basic encryption using Base64 encoding
    document.getElementById('encrypted-code').innerText = 'Encrypted Code: ' + encryptedCode;
}
