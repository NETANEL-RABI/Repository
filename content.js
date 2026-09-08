// יצירת אלמנט החלון הצף
const chatWidget = document.createElement('div');
chatWidget.id = 'ai-chat-widget';
chatWidget.innerHTML = `
  <div style="position: fixed; bottom: 20px; left: 20px; width: 300px; background: #fff; border: 1px solid #ccc; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); z-index: 999999; padding: 10px; font-family: sans-serif;">
    <div style="font-weight: bold; margin-bottom: 8px;">עוזר AI צף</div>
    <div id="ai-messages" style="height: 150px; overflow-y: auto; font-size: 14px; margin-bottom: 8px; border: 1px solid #eee; padding: 5px;">
      איך אפשר לעזור עם הדף הזה?
    </div>
    <input type="text" id="ai-input" placeholder="שאל שאלה..." style="width: 100%; box-sizing: border-box; padding: 5px;">
  </div>
`;

document.body.appendChild(chatWidget);
