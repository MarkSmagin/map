  $('.btn-map').on('click', function(){
    if($(this).hasClass('btn-map-clinics')){
      $('.map__filter').load('map_clinics.html');
    } else {
      $('.map__filter').load('map_doctors.html');
    }
  })

  $('.map-close').on('click', function(){
    $('.map__filter').html('');
  })

  function getRandomIntInclusive(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  function getRandomIntInclusive(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  const mass = [
    {
      coords: [55.827732, 49.094601],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [55.827595, 49.125350],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [55.829264, 49.123579],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [55.818574, 49.109774],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника «Доктор Ост»',
      type: 'Специализированная клиника',
      stocks: 'yes',
      service: ['Узи малого таза', 'Отоскопия'],
      doctots: [
        {
          name: 'Кадыров А. А.',
          experience: 4,
          specialization: ['Травмотолог', 'Ортопед'],
          sickness: ['Артрит'],
          reception: ['Онлайн' , 'В клинике', 'На дому']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Разумед',
      type: 'Клиника',
      stocks: 'yes',
      service: ['Узи малого таза'],
      doctots: [
        {
          name: 'Сорокина О. Ю.',
          experience: 10,
          specialization: ['Кардиолог', 'Терапевт'],
          sickness: ['Гастрит', 'Артрит'],
          reception: ['Онлайн']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Клиника семейной медицины +',
      type: 'Клиника',
      stocks: 'no',
      service: ['Отоскопия'],
      doctots: [
        {
          name: 'Габелко Д. И.',
          experience: 20,
          specialization: ['Генетик'],
          sickness: ['Аномалии развития органов', 'Гастрит'],
          reception: ['В клинике']
        }
      ]
    },
    {
      coords: [getRandomIntInclusive(52.000000, 56.000000), getRandomIntInclusive(47.000000, 50.000000)],
      title: 'Офтальмологическая клиника «Кузляр»',
      type: 'Глазная клиника',
      stocks: 'no',
      service: ['Операция при глаукоме', 'Промывание ушей'],
      doctots: [
        {
          name: 'Артемьева О. В.',
          experience: 15,
          specialization: ['Офтальмолог (окулист)'],
          sickness: ['Болезнь Альцгеймера'],
          reception: ['На дому']
        }
      ]
    }
  ]
  
  function init() {
    var myMap = new ymaps.Map('map', {
            center: [55.796127, 49.106414],
            zoom: 13,
            controls: ['zoomControl']
        }),
        clusterer = new ymaps.Clusterer();
  
        function filterMass(){
          var myPoints = mass.slice();
          var selectId = '';
          var selectValue = '';
          var myGeoObjects = [];
  
          $('select').each(function(){
            if($(this).val()){
              selectId = $(this).attr('id');
              selectValue = $(this).val();
            }
          })
          
          if(selectId){
            switch(selectId){
              case 'clinic_type':
                myPoints = myPoints.filter((point) => point.type == selectValue)
                break;
  
              case 'sickness':
                myPoints = myPoints.filter((point) => {
                  if (point.doctots.length) {
                    for (var prop in point.doctots) {
                      for (let i = 0; i < point.doctots[prop]['sickness'].length; i++){
                        if (point.doctots[prop]['sickness'][i] == selectValue){
                          return true;
                        }
                      }
                    }
                  }
                })
                break;
              
              case 'service':
                myPoints = myPoints.filter((point) => {
                  for(let i = 0; i < point['service'].length; i++){
                    if(point['service'][i] == selectValue){
                      return true;
                    }
                  }
                })
                break;
  
              case 'reception':
                myPoints = myPoints.filter((point) => {
                  if (point.doctots.length) {
                    for (var prop in point.doctots) {
                      for (let i = 0; i < point.doctots[prop]['reception'].length; i++){
                        if (point.doctots[prop]['reception'][i] == selectValue){
                          return true;
                        }
                      }
                    }
                  }
                })
                break;
  
              case 'specialization':
                myPoints = myPoints.filter((point) => {
                  if (point.doctots.length) {
                    for (var prop in point.doctots) {
                      for (let i = 0; i < point.doctots[prop]['specialization'].length; i++){
                        if (point.doctots[prop]['specialization'][i] == selectValue){
                          return true;
                        }
                      }
                    }
                  }
                })
                break;
  
              case 'experience':
                myPoints = myPoints.filter((point) => {
                  if (point.doctots.length) {
                    for (var prop in point.doctots) {
                      console.log(point.doctots[prop]['experience'])
                      if (point.doctots[prop]['experience'] >= selectValue){
                        return true;
                      }
                    }
                  }
                })
                break;
            }
          }
  
          if ($('.filter__item__stocks').prop('checked')) {
            myPoints = myPoints.filter((point) => point.stocks == 'yes');
          }
  
          for (var i = 0, l = myPoints.length; i < l; i++) {
              myGeoObjects[i] = new ymaps.GeoObject({
                geometry: {
                  type: "Point",
                  coordinates: myPoints[i].coords,
                },
                properties: {
                  balloonContentBody: myPoints[i].title
                }
              });
          }
          return myGeoObjects;
        }
    // Добавляем коллекцию меток на карту.
  
    clusterer.add(filterMass());
    myMap.geoObjects.add(clusterer);
    $('.map__filter').on('click', '.map__sorting', remake);
    $('.map-close').on('click', function(){
      $('.map__filter').html('');
      remake();
    })

    function remake(){
      clusterer.removeAll();
      clusterer.add(filterMass());
      myMap.geoObjects.add(clusterer);
    }

  }
  ymaps.ready(init);
