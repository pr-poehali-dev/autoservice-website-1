import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogTrigger,
} from '@/components/ui/dialog';

interface HeroSectionProps {
  bookingOpen: boolean;
  setBookingOpen: (open: boolean) => void;
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ bookingOpen, setBookingOpen, scrollToSection }: HeroSectionProps) => {
  return (
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
  );
};

export default HeroSection;
