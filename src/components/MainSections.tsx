import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import {
  Dialog,
  DialogTrigger,
} from '@/components/ui/dialog';

interface MainSectionsProps {
  services: Array<{
    icon: string;
    title: string;
    description: string;
    price: string;
  }>;
  specialOffers: Array<{
    title: string;
    oldPrice: string;
    newPrice: string;
    discount: string;
    description: string;
  }>;
  reviews: Array<{
    name: string;
    rating: number;
    text: string;
    date: string;
  }>;
  priceList: Array<{
    category: string;
    service: string;
    price: string;
  }>;
  bookingOpen: boolean;
  setBookingOpen: (open: boolean) => void;
}

const MainSections = ({ services, specialOffers, reviews, priceList, bookingOpen, setBookingOpen }: MainSectionsProps) => {
  return (
    <>
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
              <p className="text-lg text-muted-foreground mb-6">Garage — это современный автосервис с более чем 15-летним опытом работы. Мы специализируемся на обслуживании и ремонте автомобилей всех марок и моделей.</p>
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
    </>
  );
};

export default MainSections;