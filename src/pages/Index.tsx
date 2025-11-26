import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MainSections from '@/components/MainSections';
import ContactsAndFooter from '@/components/ContactsAndFooter';

const Index = () => {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

  const services = [
    {
      icon: 'Wrench',
      title: 'Техническое обслуживание',
      description: 'Полная диагностика и ТО автомобиля любой сложности',
      price: 'от 3 000 ₽'
    },
    {
      icon: 'Hammer',
      title: 'Кузовной ремонт',
      description: 'Восстановление геометрии кузова, покраска',
      price: 'от 8 000 ₽'
    },
    {
      icon: 'Car',
      title: 'Диагностика двигателя',
      description: 'Компьютерная диагностика и ремонт двигателя',
      price: 'от 2 500 ₽'
    },
    {
      icon: 'Settings',
      title: 'Ремонт подвески',
      description: 'Замена амортизаторов, сайлентблоков, пружин',
      price: 'от 4 500 ₽'
    },
    {
      icon: 'Gauge',
      title: 'Ремонт тормозной системы',
      description: 'Замена колодок, дисков, ремонт суппортов',
      price: 'от 3 500 ₽'
    },
    {
      icon: 'Zap',
      title: 'Электрика и электроника',
      description: 'Диагностика и ремонт электрооборудования',
      price: 'от 2 000 ₽'
    }
  ];

  const specialOffers = [
    {
      title: 'Замена масла + фильтр',
      oldPrice: '4 500 ₽',
      newPrice: '2 990 ₽',
      discount: '-33%',
      description: 'Акция действует до конца месяца'
    },
    {
      title: 'Полная диагностика',
      oldPrice: '3 500 ₽',
      newPrice: '1 500 ₽',
      discount: '-57%',
      description: 'При условии дальнейшего ремонта у нас'
    },
    {
      title: 'Шиномонтаж 4 колес',
      oldPrice: '2 400 ₽',
      newPrice: '1 600 ₽',
      discount: '-33%',
      description: 'Балансировка в подарок'
    }
  ];

  const reviews = [
    {
      name: 'Александр Петров',
      rating: 5,
      text: 'Отличный сервис! Быстро продиагностировали и починили подвеску. Цены адекватные, мастера профессиональные.',
      date: '15.11.2024'
    },
    {
      name: 'Мария Иванова',
      rating: 5,
      text: 'Делали кузовной ремонт после ДТП. Результат превзошел ожидания! Машина выглядит как новая. Спасибо!',
      date: '08.11.2024'
    },
    {
      name: 'Дмитрий Соколов',
      rating: 5,
      text: 'Обращаюсь сюда уже не первый раз. Всегда качественно и в срок. Рекомендую всем знакомым!',
      date: '02.11.2024'
    }
  ];

  const priceList = [
    { category: 'Диагностика', service: 'Компьютерная диагностика', price: '1 500 ₽' },
    { category: 'Диагностика', service: 'Диагностика ходовой части', price: '1 200 ₽' },
    { category: 'ТО', service: 'Замена масла двигателя', price: '1 500 ₽' },
    { category: 'ТО', service: 'Замена масляного фильтра', price: '500 ₽' },
    { category: 'ТО', service: 'Замена воздушного фильтра', price: '400 ₽' },
    { category: 'Тормозная система', service: 'Замена передних колодок', price: '1 800 ₽' },
    { category: 'Тормозная система', service: 'Замена задних колодок', price: '1 600 ₽' },
    { category: 'Подвеска', service: 'Замена амортизатора', price: '2 500 ₽' },
    { category: 'Подвеска', service: 'Замена сайлентблока', price: '1 200 ₽' },
    { category: 'Шиномонтаж', service: 'Шиномонтаж 1 колеса', price: '400 ₽' },
    { category: 'Шиномонтаж', service: 'Балансировка 1 колеса', price: '300 ₽' },
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо! Мы свяжемся с вами в ближайшее время для подтверждения записи.');
    setBookingOpen(false);
    setFormData({ name: '', phone: '', service: '', date: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header
        bookingOpen={bookingOpen}
        setBookingOpen={setBookingOpen}
        formData={formData}
        setFormData={setFormData}
        handleBooking={handleBooking}
        scrollToSection={scrollToSection}
      />
      <HeroSection
        bookingOpen={bookingOpen}
        setBookingOpen={setBookingOpen}
        scrollToSection={scrollToSection}
      />
      <MainSections
        services={services}
        specialOffers={specialOffers}
        reviews={reviews}
        priceList={priceList}
        bookingOpen={bookingOpen}
        setBookingOpen={setBookingOpen}
      />
      <ContactsAndFooter />
    </div>
  );
};

export default Index;
