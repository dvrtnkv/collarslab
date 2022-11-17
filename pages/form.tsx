export default function Form() {
  return (
    <form action="/api/feedback" method="post">
      <label htmlFor="first">Имя:</label>
      <input type="text" id="first" name="first" placeholder="Имя" />
      <label htmlFor="message">Сообщение:</label>
      <textarea
        id="message"
        name="message"
        placeholder="Сообщение..."
        rows={3}
      />
      <button type="submit">Отправить</button>
    </form>
  );
}
