import React from "react";

export const Contacts = () => {
  return (
    <section className="contacts">
      <div className="container">
        <h2 className="contacts__title">Контактная информация</h2>
        <div className="contacts-list">
          <div>
            <strong>Телефон</strong>:
          </div>
          <p>
            8-919-413-44-75
            <br />
            8-902-672-77-04
          </p>
          <div>
            <strong>E-mail: </strong>
          </div>
          <p>
            a10785150@gmail.com
            <br />
            den.abazovik@mail.ru
          </p>
          <div>
            <strong>Адрес: </strong>
          </div>
          <p>
            424005, Республика Марий Эл,
            <br />
            г. Йошкар-Ола, ул. Сернурский
            <br />
            тракт, д. 20 Г
          </p>
        </div>
      </div>
    </section>
  );
};
