import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const ContactsAndFooter = () => {
  return (
    <>
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
                    <p className="opacity-90">г. Краснодар, ДНТ Знаменский, ул. Черногорская, 17</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Телефон</h3>
                    <p className="opacity-90">+7 (967) 000-67-71</p>
                    <p className="opacity-90"></p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="opacity-90"></p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Режим работы</h3>
                    <p className="opacity-90">Пн-Сб: 9:00 - 19:00</p>
                    <p className="opacity-90">Вс: 10:00 - 19:00</p>
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
    </>
  );
};

export default ContactsAndFooter;