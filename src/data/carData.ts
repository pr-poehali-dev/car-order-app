export interface CarBrand {
  id: string;
  name: string;
  logo?: string;
}

export interface CarModel {
  id: string;
  name: string;
  brandId: string;
  price: string;
  image?: string;
}

export interface Configuration {
  id: string;
  name: string;
  modelId: string;
  price: string;
  features: string[];
}

export const carBrands: CarBrand[] = [
  { id: 'toyota', name: 'Toyota' },
  { id: 'honda', name: 'Honda' },
  { id: 'bmw', name: 'BMW' },
  { id: 'mercedes', name: 'Mercedes-Benz' },
  { id: 'audi', name: 'Audi' },
  { id: 'volkswagen', name: 'Volkswagen' },
  { id: 'ford', name: 'Ford' },
  { id: 'nissan', name: 'Nissan' },
  { id: 'mazda', name: 'Mazda' },
  { id: 'hyundai', name: 'Hyundai' },
  { id: 'kia', name: 'Kia' },
  { id: 'lada', name: 'LADA' },
  { id: 'porsche', name: 'Porsche' },
  { id: 'lexus', name: 'Lexus' },
  { id: 'volvo', name: 'Volvo' },
  { id: 'skoda', name: 'Škoda' },
  { id: 'mitsubishi', name: 'Mitsubishi' },
  { id: 'renault', name: 'Renault' },
];

export const carModels: CarModel[] = [
  // Toyota
  { id: 'camry', name: 'Camry', brandId: 'toyota', price: 'от 2.5 млн ₽', image: '/img/f7506545-4219-409e-bd4a-fa990439e1d9.jpg' },
  { id: 'corolla', name: 'Corolla', brandId: 'toyota', price: 'от 1.8 млн ₽' },
  { id: 'rav4', name: 'RAV4', brandId: 'toyota', price: 'от 3.2 млн ₽' },
  { id: 'land-cruiser', name: 'Land Cruiser', brandId: 'toyota', price: 'от 6.5 млн ₽' },
  { id: 'highlander', name: 'Highlander', brandId: 'toyota', price: 'от 4.2 млн ₽' },
  
  // Honda
  { id: 'civic', name: 'Civic', brandId: 'honda', price: 'от 2.1 млн ₽' },
  { id: 'accord', name: 'Accord', brandId: 'honda', price: 'от 2.8 млн ₽' },
  { id: 'cr-v', name: 'CR-V', brandId: 'honda', price: 'от 3.5 млн ₽' },
  { id: 'pilot', name: 'Pilot', brandId: 'honda', price: 'от 4.8 млн ₽' },
  
  // BMW
  { id: 'x3', name: 'X3', brandId: 'bmw', price: 'от 5.2 млн ₽' },
  { id: '5series', name: '5 Series', brandId: 'bmw', price: 'от 4.8 млн ₽' },
  { id: 'x5', name: 'X5', brandId: 'bmw', price: 'от 7.5 млн ₽' },
  { id: '3series', name: '3 Series', brandId: 'bmw', price: 'от 3.5 млн ₽' },
  { id: 'x7', name: 'X7', brandId: 'bmw', price: 'от 9.2 млн ₽' },
  
  // Mercedes-Benz
  { id: 'e-class', name: 'E-Class', brandId: 'mercedes', price: 'от 5.5 млн ₽' },
  { id: 'c-class', name: 'C-Class', brandId: 'mercedes', price: 'от 3.8 млн ₽' },
  { id: 'gle', name: 'GLE', brandId: 'mercedes', price: 'от 8.2 млн ₽' },
  { id: 's-class', name: 'S-Class', brandId: 'mercedes', price: 'от 12 млн ₽' },
  { id: 'gla', name: 'GLA', brandId: 'mercedes', price: 'от 3.2 млн ₽' },
  
  // Audi
  { id: 'a4', name: 'A4', brandId: 'audi', price: 'от 3.3 млн ₽' },
  { id: 'q5', name: 'Q5', brandId: 'audi', price: 'от 5.1 млн ₽' },
  { id: 'a6', name: 'A6', brandId: 'audi', price: 'от 4.9 млн ₽' },
  { id: 'q7', name: 'Q7', brandId: 'audi', price: 'от 7.8 млн ₽' },
  { id: 'q3', name: 'Q3', brandId: 'audi', price: 'от 3.8 млн ₽' },
  
  // Volkswagen
  { id: 'tiguan', name: 'Tiguan', brandId: 'volkswagen', price: 'от 2.8 млн ₽' },
  { id: 'passat', name: 'Passat', brandId: 'volkswagen', price: 'от 2.5 млн ₽' },
  { id: 'polo', name: 'Polo', brandId: 'volkswagen', price: 'от 1.3 млн ₽' },
  { id: 'touareg', name: 'Touareg', brandId: 'volkswagen', price: 'от 5.5 млн ₽' },
  { id: 'taos', name: 'Taos', brandId: 'volkswagen', price: 'от 2.2 млн ₽' },
  
  // LADA
  { id: 'vesta', name: 'Vesta', brandId: 'lada', price: 'от 1.2 млн ₽' },
  { id: 'granta', name: 'Granta', brandId: 'lada', price: 'от 700 тыс ₽' },
  { id: 'niva', name: 'Niva Legend', brandId: 'lada', price: 'от 900 тыс ₽' },
  { id: 'largus', name: 'Largus', brandId: 'lada', price: 'от 1.3 млн ₽' },
];

export const configurations: Configuration[] = [
  // Toyota Camry
  { id: 'camry-base', name: 'Стандарт', modelId: 'camry', price: '2.5 млн ₽', features: ['Кондиционер', 'ABS', '6 подушек безопасности', 'Мультимедиа система'] },
  { id: 'camry-comfort', name: 'Комфорт', modelId: 'camry', price: '2.8 млн ₽', features: ['Климат-контроль', 'Круиз-контроль', 'Парктроник', 'Камера заднего вида'] },
  { id: 'camry-premium', name: 'Премиум', modelId: 'camry', price: '3.2 млн ₽', features: ['Кожаный салон', 'Панорамная крыша', 'Адаптивный круиз', 'Система кругового обзора'] },
  
  // BMW X3
  { id: 'x3-base', name: 'Base', modelId: 'x3', price: '5.2 млн ₽', features: ['Полный привод xDrive', 'Спортивная подвеска', 'LED фары', 'Навигация'] },
  { id: 'x3-m-sport', name: 'M Sport', modelId: 'x3', price: '6.1 млн ₽', features: ['M спорт пакет', 'Спортивные сиденья', 'Harman Kardon', 'Head-Up дисплей'] },
  { id: 'x3-luxury', name: 'Luxury', modelId: 'x3', price: '6.8 млн ₽', features: ['Премиум кожа Nappa', 'Массаж сидений', 'Лазерные фары', 'Ассистент парковки'] },
  
  // Mercedes E-Class
  { id: 'e-class-avantgarde', name: 'Avantgarde', modelId: 'e-class', price: '5.5 млн ₽', features: ['MBUX система', 'Ambient подсветка', 'Keyless-Go', 'Активный круиз-контроль'] },
  { id: 'e-class-exclusive', name: 'Exclusive', modelId: 'e-class', price: '6.3 млн ₽', features: ['Designo интерьер', 'Burmester звук', 'Пневмоподвеска', 'Дисплей пассажира'] },
  { id: 'e-class-amg', name: 'AMG Line', modelId: 'e-class', price: '7.2 млн ₽', features: ['AMG стайлинг', 'AMG подвеска', 'Панорамная крыша', 'Night пакет'] },
  
  // LADA Vesta
  { id: 'vesta-classic', name: 'Classic', modelId: 'vesta', price: '1.2 млн ₽', features: ['Кондиционер', 'Электростеклоподъемники', 'Центральный замок', 'Аудиосистема'] },
  { id: 'vesta-comfort', name: 'Comfort', modelId: 'vesta', price: '1.4 млн ₽', features: ['Климат-контроль', 'Подогрев сидений', 'Парктроник', 'Круиз-контроль'] },
  { id: 'vesta-luxe', name: 'Luxe', modelId: 'vesta', price: '1.6 млн ₽', features: ['Кожаный салон', 'Навигация', 'Камера заднего вида', 'Датчик дождя'] },
];