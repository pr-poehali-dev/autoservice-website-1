import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

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
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="CarFront" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-foreground">AutoPro</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">
                О нас
              </button>
              <button onClick={() => scrollToSection('price')} className="text-foreground hover:text-primary transition-colors">
                Прайс
              </button>
              <button onClick={() => scrollToSection('reviews')} className="text-foreground hover:text-primary transition-colors">
                Отзывы
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-primary transition-colors">
                Контакты
              </button>
              <Dialog open={bookingOpen} onOpenChange={setBookingOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Записаться онлайн
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle>Онлайн-запись на сервис</DialogTitle>
                    <DialogDescription>
                      Заполните форму и мы свяжемся с вами для подтверждения
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleBooking} className="space-y-4 mt-4">
                    <div>
                      <Input
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="tel"
                        placeholder="Телефон"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="Услуга"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Дополнительная информация (опционально)"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={3}
                      />
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                      Отправить заявку
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </nav>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-primary text-primary-foreground">Профессиональный автосервис</Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                Качественный ремонт вашего автомобиля
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Современное оборудование, опытные мастера и гарантия на все работы. Более 15 лет заботимся о вашем автомобиле.
              </p>
              <div className="flex gap-4">
                <Dialog open={bookingOpen} onOpenChange={setBookingOpen}>
                  <DialogTrigger asChild>
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                      Записаться на ремонт
                    </Button>
                  </DialogTrigger>
                </Dialog>
                <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => scrollToSection('contacts')}>
                  Связаться с нами
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-8 mt-12">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                  <div className="text-sm text-muted-foreground">клиентов</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">довольных</div>
                </div>
              </div>
            </div>
            <div className="animate-slide-up">
              <img
                src="https://cdn.poehali.dev/projects/e1afa3bf-961b-4486-8038-12f28037823b/files/1d33457b-9248-4099-9ed6-031299f14c0f.jpg"
                alt="Автосервис"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">Наши услуги</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Полный спектр автоуслуг</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Предоставляем все виды ремонта и обслуживания автомобилей с использованием оригинальных запчастей
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={28} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <Button variant="outline" size="sm">Подробнее</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white text-primary">Специальные предложения</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Акции и скидки</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Выгодные предложения на популярные услуги. Успейте воспользоваться!
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {specialOffers.map((offer, index) => (
              <Card key={index} className="bg-white/95 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-destructive text-destructive-foreground text-lg px-3 py-1">
                      {offer.discount}
                    </Badge>
                    <Icon name="Tag" size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-foreground">{offer.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xl text-muted-foreground line-through">{offer.oldPrice}</span>
                      <span className="text-3xl font-bold text-primary">{offer.newPrice}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{offer.description}</p>
                    <Dialog open={bookingOpen} onOpenChange={setBookingOpen}>
                      <DialogTrigger asChild>
                        <Button className="w-full bg-primary hover:bg-primary/90">
                          Воспользоваться
                        </Button>
                      </DialogTrigger>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://cdn.poehali.dev/projects/e1afa3bf-961b-4486-8038-12f28037823b/files/7e86dee1-3c45-4a00-8a3e-53d6c39c1e05.jpg"
                alt="О нас"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div>
              <Badge className="mb-4 bg-secondary text-secondary-foreground">О нас</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Профессионалы своего дела
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                AutoPro — это современный автосервис с более чем 15-летним опытом работы. Мы специализируемся на обслуживании и ремонте автомобилей всех марок и моделей.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Наша команда состоит из высококвалифицированных мастеров, прошедших специальное обучение и сертификацию. Мы используем только современное диагностическое оборудование и оригинальные запчасти.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Гарантия качества</h3>
                    <p className="text-sm text-muted-foreground">На все работы и запчасти</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Быстро</h3>
                    <p className="text-sm text-muted-foreground">Точные сроки выполнения</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="price" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary text-primary-foreground">Прайс-лист</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Цены на услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Прозрачное ценообразование. Стоимость указана за работу без учета запчастей
            </p>
          </div>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="text-left p-4 font-bold">Категория</th>
                      <th className="text-left p-4 font-bold">Услуга</th>
                      <th className="text-right p-4 font-bold">Цена</th>
                    </tr>
                  </thead>
                  <tbody>
                    {priceList.map((item, index) => (
                      <tr key={index} className="border-t hover:bg-muted/50 transition-colors">
                        <td className="p-4 text-muted-foreground">{item.category}</td>
                        <td className="p-4">{item.service}</td>
                        <td className="p-4 text-right font-bold text-primary">{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">Полный прайс-лист доступен по запросу</p>
            <Button size="lg" variant="outline">Скачать полный прайс-лист</Button>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">Отзывы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Что говорят наши клиенты</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы ценим доверие каждого клиента и стремимся оправдать ожидания
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="text-xs">{review.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <img
              src="https://cdn.poehali.dev/projects/e1afa3bf-961b-4486-8038-12f28037823b/files/487d2a55-1b67-40f4-9663-eeac2c90e3c8.jpg"
              alt="Довольные клиенты"
              className="rounded-2xl shadow-xl max-w-2xl mx-auto w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-gradient-to-br from-foreground to-foreground/90 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Badge className="mb-4 bg-white text-foreground">Контакты</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Свяжитесь с нами</h2>
              <p className="text-lg opacity-90 mb-8">
                Мы работаем ежедневно и готовы ответить на все ваши вопросы
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Адрес</h3>
                    <p className="opacity-90">г. Москва, ул. Автомобильная, д. 15</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Телефон</h3>
                    <p className="opacity-90">+7 (495) 123-45-67</p>
                    <p className="opacity-90">+7 (800) 555-35-35</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="opacity-90">info@autopro.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Режим работы</h3>
                    <p className="opacity-90">Пн-Пт: 8:00 - 20:00</p>
                    <p className="opacity-90">Сб-Вс: 9:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Быстрая связь</h3>
              <form className="space-y-4">
                <Input placeholder="Ваше имя" className="bg-background" />
                <Input type="tel" placeholder="Телефон" className="bg-background" />
                <Input type="email" placeholder="Email" className="bg-background" />
                <Textarea placeholder="Ваше сообщение" rows={4} className="bg-background" />
                <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                  Отправить сообщение
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="CarFront" size={28} />
                <span className="text-xl font-bold">AutoPro</span>
              </div>
              <p className="text-sm opacity-75">
                Профессиональный автосервис полного цикла. Качество и надежность с 2009 года.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm opacity-75">
                <li>Техническое обслуживание</li>
                <li>Кузовной ремонт</li>
                <li>Диагностика</li>
                <li>Ремонт подвески</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm opacity-75">
                <li>О компании</li>
                <li>Прайс-лист</li>
                <li>Отзывы</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Мы в соцсетях</h4>
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <Icon name="MessageCircle" size={20} />
                </div>
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <Icon name="Send" size={20} />
                </div>
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <Icon name="Phone" size={20} />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm opacity-75">
            <p>© 2024 AutoPro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
