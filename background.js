// האזנה להודעות שמגיעות מ-content.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "ASK_AI") {
    
    const userQuestion = message.question;
    const pageContext = message.context;

    // כאן תוכל בהמשך לחבר קריאת API אמיתית ל-AI
    // כרגע זו תשובת דוגמה שמחזירה את מה שנתקבל:
    const replyText = "קיבלתי את השאלה: '" + userQuestion + "'. אורך הטקסט בדף הוא " + pageContext.length + " תווים.";

    // החזרת התשובה חזרה לחלון הצף
    sendResponse({ answer: replyText });
  }
  
  return true; // שומר על הערוץ פתוח לתגובה
});
