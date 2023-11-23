import Item from './Item'

const App = () => {
  return (
    <div className="bg-[#ffffff] flex flex-col h-screen pr-[-2rem]">
      <header className="bg-[#333] flex justify-center items-center w-[100%] py-[3rem]">
        <h1 className="text-[2.4rem] text-[#3f3f3f] text-white">Доповідь про Гарсіа Лорка</h1>
      </header>
      <div className="text-center flex justify-center items-center flex-col p-[2rem] ">
        <img
          src="https://znaj.ua/crops/1e1cd6/620x0/1/0/2018/07/05/2098-0.jpg"
          alt="Фотографія Гарсіа"
          className='w-[30rem] rounded'

        />
        <span className="font-bold">1898 - 1936</span>

        <Item
          title='Початок творчості та ранні роки Лорки'
          text='Федеріко Гарсія Лорка – один з найвидатніших
         поетів Іспанії початку ХХ століття. Його творчість
          не тільки відбила загальні настрої епохи, але й
           показала і вразила красою іспанської культури
            увесь світ. Перша збірка поета побачила світ
             1918 року в результаті подорожей рідною країною.
              Вона мала назву «Враження й пейзажі» і одразу принесла
               Федеріко популярність та визнання. Через рік письменник
                написав свою першу п’єсу «Чаклунство метелика».'
          img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq--HVhbYkDFpPCoxcGKVcsk8iEv1xx3FqDQ&usqp=CAU'
        />

        <Item
          title='Авангардистський період'
          text='У 20-ті роки ХХ століття Федеріко Гарсія Лорка був
         помітною фігурою серед художників-авангардистів. 1928 року
          вийшла збірка «Циганські романсеро», що утвердила поета як
           одного з представників літератури нового покоління. У його
            віршах яскраво поєднались буденність і магія, світло і темрява
             краса і потворність, простота і загадковість. Про цю збірку сам
              Лорка казав, що «хотів злити циганську міфологію з усією сьогоднішньою повсякденністю».'
          img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnX1a2emGwMUSA0Ww_NMyQxJePdohXjazAQw&usqp=CAU'
        />

        <Item
          title='Cохожість поєта з актором Марком Богатирйовим'
          text='Також складно не помітити схожість Фредеріка з відомим актором Макром Богатирйовим
         який знімався в таких відомомих серіалах як "Кухня", "Велика", "Кухня в Парижі" та в багато інших.'
          img='data:image/jpeg;base64,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'
        />

        <Item
          title='Андалусійський фольклор у творчості'
          text='Загалом творчість Федеріко Гарсія Лорки – це яскраве втілення
         андалуського фольклору сучасними йому методами. Фольклор переплітається
          з міфами і від експериментів письменника отримує нові форми, нове втілення.
           Традиції ж Лорка підносить на новий рівень – він нагадує про них іспанцям і
            знайомить з ними увесь інший світ, оспівуючи їх, захоплюючись ними.'
          img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdhNUydoCYjLhFa5o9-MS-OCB821rTKRm9sFOy799gTnLl_H2NKJRqFDNgb93Iq1x4bFM&usqp=CAU'
        />

        <Item
          title='Музика та танець у творчості'
          text='Велику увагу в поезії Федеріко приділено музиці й танцю
         – саме ними так славиться Іспанія й Андалусія зокрема. Вони
          якомога яскравіше передані у збірках «Канте хондо», що є давнім
           співом східного характеру, де музика й голос зливаються воєдино,
            та «Циганське романсеро», де яскраво втілено традиції циганських
            традицій і звичаїв, особливості їх музики й танців, на якісно новий рівень поет підность жанр романсу.'
          img='https://cdn.u.media/max/w728/stus_czco/P5Ql06BMR.jpeg'
        />

        <Item
          title='Загибель Гарсіа Лоркі'
          text="Перед початком громадянської війни Гарсія Лорка виїжджає з Мадрида
         в Гранаду, хоча було очевидно, що там його чекає серйозна небезпека: на півдні
          Іспанії були особливо сильні позиції правих. 18 серпня 1936 націоналісти заарештовують
           Гарсіа Лорку, і наступного дня поета вбивають як республіканця та комуніста. Багато сучасних
            досліджень спростовують цю думку, вважаючи причиною розстрілу Лорки ворожнечу між його сім’єю
             та іншими впливовими родинами регіону. Лорка не робив заяв на користь сторін конфлікту і був
              особистим другом Хосе Антоніо Прімо де Рівери. Після цього до смерті генерала Франко книги
               Гарсіа Лорки були заборонені в Іспанії."
          img="https://gdb.rferl.org/08de0000-0a00-0242-1759-08da4347075f_w408_r0_s.jpg"
        />
      </div>
          <img
            src="https://gdb.rferl.org/08de0000-0a00-0242-1095-08da43469e59_w1200_r1.jpg"
            alt=""
            className='mb-[1rem] rounded object-contain max-w-[300px] max-h-[250px] ml-[2rem]'
          />
      <footer className='w-[100%] bg-[#333] py-[2rem] flex items-center justify-center mt-[2rem]'>
        <div className='text-center text-white'>
          <h1 className='borderB mb-[1.5rem]'>дякую за увагу!</h1>
          <h1>Цей сайт було зроблено мною</h1>
          <h1>(лагодіч дмитро)</h1>
        </div>
      </footer>
    </div>
  )
}

export default App