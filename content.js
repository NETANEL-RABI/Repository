// יצירת החלון הצף במסך
const chatWidget = document.createElement('div');
chatWidget.id = 'ai-chat-widget';
chatWidget.innerHTML = `
  <div style="position: fixed; bottom: 20px; left: 20px; width: 280px; background: #fff; border: 1px solid #ccc; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.2); z-index: 999999; padding: 12px; font-family: sans-serif; direction: rtl; text-align: right;">
    <div style="font-weight: bold; margin-bottom: 8px;">עוזר AI צף</div>
    <div id="ai-response-box" style="height: 100px; overflow-y: auto; font-size: 13px; margin-bottom: 8px; border: 1px solid #eee; padding: 6px; background: #f9f9f9;">
      איך אפשר לעזור עם הדף הזה?
    </div>
    <div style="display: flex; gap: 5px;">
      <input type="text" id="ai-user-input" placeholder="שאל שאלה..." style="flex: 1; padding: 5px; font-size: 13px;">
      <button id="ai-send-btn" style="padding: 5px 10px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;">שלח</button>
    </div>
  </div>
`;
document.body.appendChild(chatWidget);

// פונקציית שליחת ההודעה
function askAI(question) {
  const pageText = document.body.innerText;
  const responseBox = document.getElementById("ai-response-box");
  responseBox.innerText = " מעבד...";

  // שליחה ל-background.js
  chrome.runtime.sendMessage(
    { action: "ASK_AI", question: question, context: pageText },
    function(response) {
      if (chrome.runtime.lastError) {
        responseBox.innerText = "שגיאה בתקשורת.";
        return;
      }
      responseBox.innerText = response ? response.answer : "אין תשובה.";
    }
  );
}

// חיבור הלחיצות
document.getElementById("ai-send-btn").addEventListener("click", () => {
  const input = document.getElementById("ai-user-input");
  if (input.value.trim() !== "") {
    askAI(input.value);
    input.value = "";
  }
});
