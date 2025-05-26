import { useEffect } from "react";

const TELEGRAM_BOT_URL = "https://t.me/Zeleno_house_bot?start=w40087090";

const SuccessPage: React.FC = () => {
  useEffect(() => {
    window.location.href = TELEGRAM_BOT_URL;
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Переадресація на Telegram...</h1>
      <p>Якщо вас не перенаправило автоматично, <a href={TELEGRAM_BOT_URL}>натисніть тут</a>.</p>
    </div>
  );
};

export default SuccessPage;

