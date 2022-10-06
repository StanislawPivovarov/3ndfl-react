import React from "react";
import Purpose from "../../Cards/Purposes";
import house from "../../assets/images/purpose/appartments.svg";
import education from "../../assets/images/purpose/education.svg";
import medical from "../../assets/images/purpose/med.svg";
import income from "../../assets/images/purpose/additional-income.svg";
import insurance from "../../assets/images/purpose/insurance.svg";
import invest from "../../assets/images/purpose/investitions.svg";

function Main() {
  return (
    <div>
      <Purpose
        imageUrl={house}
        description="КУПИЛИ НЕДВИЖИМОСТЬ"
        subtitle="Вы приобрели недвижимость (квартира, дом, комната, земельный участок с домом)?"
        subdescription="Вы можете вернуть до 260 000 рублей с суммы, уплаченной за вашу квартиру или дом, а также можете вернуть до 390 000 рублей с уплаченных процентов по ипотеке."
        price="300 ₽"
      />
      <Purpose
        imageUrl={education}
        description="ОПЛАТИЛИ ОБУЧЕНИЕ"
        subtitle="Вы заплатили за свое обучение, за своих детей, или братьев, сестер?"
        subdescription="Вы можете вернуть до 260 000 рублей с суммы, уплаченной за вашу квартиру или дом, а также можете вернуть до 390 000 рублей с уплаченных процентов по ипотеке."
        price="300 ₽"
      />
      <Purpose
        imageUrl={medical}
        description="ОПЛАТИЛИ ЛЕЧЕНИЕ"
        subtitle="Вы приобрели недвижимость (квартира, дом, комната, земельный участок с домом)?"
        subdescription="Вы можете вернуть до 260 000 рублей с суммы, уплаченной за вашу квартиру или дом, а также можете вернуть до 390 000 рублей с уплаченных процентов по ипотеке."
        price="300 ₽"
      />
      <Purpose
        imageUrl={income}
        description="ДОПОЛНИТЕЛЬНЫЙ ДОХОД"
        subtitle="Вы приобрели недвижимость (квартира, дом, комната, земельный участок с домом)?"
        subdescription="Вы можете вернуть до 260 000 рублей с суммы, уплаченной за вашу квартиру или дом, а также можете вернуть до 390 000 рублей с уплаченных процентов по ипотеке."
        price="300 ₽"
      />
      <Purpose
        imageUrl={insurance}
        description="СТРАХОВАНИЕ"
        subtitle="Вы заплатили за свое обучение, за своих детей, или братьев, сестер?"
        subdescription="Вы можете вернуть до 260 000 рублей с суммы, уплаченной за вашу квартиру или дом, а также можете вернуть до 390 000 рублей с уплаченных процентов по ипотеке."
        price="300 ₽"
      />
      <Purpose
        imageUrl={invest}
        description="ИНВЕСТИЦИИ"
        subtitle="Вы приобрели недвижимость (квартира, дом, комната, земельный участок с домом)?"
        subdescription="Вы можете вернуть до 260 000 рублей с суммы, уплаченной за вашу квартиру или дом, а также можете вернуть до 390 000 рублей с уплаченных процентов по ипотеке."
        price="300 ₽"
      />

    </div>
  );
}

export default Main;
