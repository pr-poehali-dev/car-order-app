import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { carBrands, carModels, configurations } from '@/data/carData';
import type { CarBrand, CarModel, Configuration } from '@/data/carData';

type Step = 'brand' | 'model' | 'configuration' | 'contacts';

const Index = () => {
  const [currentStep, setCurrentStep] = useState<Step>('brand');
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [selectedConfiguration, setSelectedConfiguration] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [contactData, setContactData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const filteredBrands = carBrands.filter(brand =>
    brand.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const brandModels = carModels.filter(model => model.brandId === selectedBrand);
  const modelConfigurations = configurations.filter(config => config.modelId === selectedModel);

  const handleBrandSelect = (brandId: string) => {
    setSelectedBrand(brandId);
    setCurrentStep('model');
  };

  const handleModelSelect = (modelId: string) => {
    setSelectedModel(modelId);
    setCurrentStep('configuration');
  };

  const handleConfigurationSelect = (configId: string) => {
    setSelectedConfiguration(configId);
  };

  const handleContactChange = (field: string, value: string) => {
    setContactData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmitOrder = () => {
    console.log('Order submitted:', {
      brand: selectedBrandData?.name,
      model: selectedModelData?.name,
      configuration: selectedConfigData?.name,
      contact: contactData
    });
    alert('Заказ успешно отправлен! Мы свяжемся с вами в ближайшее время.');
  };

  const goBack = () => {
    if (currentStep === 'contacts') {
      setCurrentStep('configuration');
    } else if (currentStep === 'configuration') {
      setCurrentStep('model');
      setSelectedConfiguration(null);
    } else if (currentStep === 'model') {
      setCurrentStep('brand');
      setSelectedModel(null);
    }
  };

  const selectedBrandData = carBrands.find(b => b.id === selectedBrand);
  const selectedModelData = carModels.find(m => m.id === selectedModel);
  const selectedConfigData = configurations.find(c => c.id === selectedConfiguration);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[480px] mx-auto p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 pt-4">
          <h1 className="text-2xl font-bold">Заказ автомобиля</h1>
          {currentStep !== 'brand' && (
            <Button
              variant="ghost"
              size="icon"
              onClick={goBack}
              className="hover:bg-secondary"
            >
              <Icon name="ArrowLeft" size={24} />
            </Button>
          )}
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8 gap-2">
          <div className={`flex items-center justify-center w-10 h-10 rounded-full text-sm font-medium ${
            currentStep === 'brand' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
          }`}>
            1
          </div>
          <div className={`h-[2px] w-16 ${['model', 'configuration', 'contacts'].includes(currentStep) ? 'bg-primary' : 'bg-muted'}`} />
          <div className={`flex items-center justify-center w-10 h-10 rounded-full text-sm font-medium ${
            currentStep === 'model' ? 'bg-primary text-primary-foreground' : 
            ['configuration', 'contacts'].includes(currentStep) ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
          }`}>
            2
          </div>
          <div className={`h-[2px] w-16 ${['configuration', 'contacts'].includes(currentStep) ? 'bg-primary' : 'bg-muted'}`} />
          <div className={`flex items-center justify-center w-10 h-10 rounded-full text-sm font-medium ${
            currentStep === 'configuration' ? 'bg-primary text-primary-foreground' : 
            currentStep === 'contacts' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
          }`}>
            3
          </div>
        </div>

        {/* Step Content */}
        <div className="animate-fade-in">
          {currentStep === 'brand' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Выберите марку</h2>
              <div className="relative mb-6">
                <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Найти марку..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="grid grid-cols-2 gap-3 max-h-[60vh] overflow-y-auto pr-2">
                {filteredBrands.map((brand) => (
                  <Card
                    key={brand.id}
                    className="p-4 cursor-pointer hover:shadow-lg transition-all hover:scale-105 hover:border-primary animate-fade-in"
                    onClick={() => handleBrandSelect(brand.id)}
                  >
                    <div className="flex items-center justify-center h-16 mb-2">
                      <Icon name="Car" size={32} className="text-muted-foreground" />
                    </div>
                    <p className="text-center font-medium">{brand.name}</p>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {currentStep === 'model' && selectedBrandData && (
            <div>
              <h2 className="text-xl font-semibold mb-2">Выберите модель</h2>
              <p className="text-muted-foreground mb-6">{selectedBrandData.name}</p>
              <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-2">
                {brandModels.length > 0 ? (
                  brandModels.map((model) => (
                    <Card
                      key={model.id}
                      className="p-4 cursor-pointer hover:shadow-lg transition-all hover:border-primary animate-fade-in"
                      onClick={() => handleModelSelect(model.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">{model.name}</h3>
                          <p className="text-muted-foreground">{model.price}</p>
                        </div>
                        {model.image && (
                          <div className="w-24 h-16 ml-4 rounded overflow-hidden">
                            <img 
                              src={model.image} 
                              alt={model.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <Icon name="ChevronRight" size={24} className="text-muted-foreground ml-2" />
                      </div>
                    </Card>
                  ))
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <Icon name="Car" size={48} className="mx-auto mb-4 opacity-50" />
                    <p>Для этой марки пока нет доступных моделей</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {currentStep === 'configuration' && selectedModelData && (
            <div>
              <h2 className="text-xl font-semibold mb-2">Выберите комплектацию</h2>
              <p className="text-muted-foreground mb-6">
                {selectedBrandData?.name} {selectedModelData.name}
              </p>
              <div className="space-y-3 max-h-[50vh] overflow-y-auto pr-2">
                {modelConfigurations.length > 0 ? (
                  modelConfigurations.map((config) => (
                    <Card
                      key={config.id}
                      className={`p-4 cursor-pointer transition-all animate-fade-in ${
                        selectedConfiguration === config.id 
                          ? 'border-primary shadow-lg scale-[1.02]' 
                          : 'hover:shadow-lg hover:border-primary'
                      }`}
                      onClick={() => handleConfigurationSelect(config.id)}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-lg">{config.name}</h3>
                          <p className="text-xl font-bold text-primary">{config.price}</p>
                        </div>
                        {selectedConfiguration === config.id && (
                          <Icon name="CheckCircle" size={24} className="text-primary animate-scale-in" />
                        )}
                      </div>
                      <div className="space-y-1">
                        {config.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Icon name="Check" size={16} className="text-primary" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </Card>
                  ))
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <Icon name="Settings" size={48} className="mx-auto mb-4 opacity-50" />
                    <p>Для этой модели пока нет доступных комплектаций</p>
                  </div>
                )}
              </div>
              
              {selectedConfiguration && (
                <Button 
                  className="w-full mt-6" 
                  size="lg"
                  onClick={() => setCurrentStep('contacts')}
                >
                  Перейти к оформлению
                </Button>
              )}
            </div>
          )}

          {currentStep === 'contacts' && (
            <div>
              <h2 className="text-xl font-semibold mb-2">Контактные данные</h2>
              <p className="text-muted-foreground mb-6">Оставьте ваши данные для связи</p>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Имя</label>
                  <Input
                    placeholder="Введите ваше имя"
                    value={contactData.name}
                    onChange={(e) => handleContactChange('name', e.target.value)}
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Телефон</label>
                  <Input
                    placeholder="+7 (999) 123-45-67"
                    type="tel"
                    value={contactData.phone}
                    onChange={(e) => handleContactChange('phone', e.target.value)}
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input
                    placeholder="example@mail.ru"
                    type="email"
                    value={contactData.email}
                    onChange={(e) => handleContactChange('email', e.target.value)}
                  />
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <h3 className="font-medium mb-2">Итоговый заказ:</h3>
                <div className="space-y-1 text-sm">
                  <p><span className="text-muted-foreground">Автомобиль:</span> {selectedBrandData?.name} {selectedModelData?.name}</p>
                  <p><span className="text-muted-foreground">Комплектация:</span> {selectedConfigData?.name}</p>
                  <p className="font-semibold text-lg mt-2">{selectedConfigData?.price}</p>
                </div>
              </div>
              
              <Button 
                className="w-full mt-6" 
                size="lg"
                onClick={handleSubmitOrder}
                disabled={!contactData.name || !contactData.phone}
              >
                <Icon name="Send" size={20} className="mr-2" />
                Отправить заказ
              </Button>
            </div>
          )}
        </div>

        {/* Summary */}
        {(selectedBrand || selectedModel || selectedConfiguration) && (
          <div className="mt-8 p-4 bg-muted/50 rounded-lg animate-fade-in">
            <h3 className="font-medium mb-2">Ваш выбор:</h3>
            <div className="space-y-1 text-sm">
              {selectedBrandData && (
                <p><span className="text-muted-foreground">Марка:</span> {selectedBrandData.name}</p>
              )}
              {selectedModelData && (
                <p><span className="text-muted-foreground">Модель:</span> {selectedModelData.name}</p>
              )}
              {selectedConfigData && (
                <p><span className="text-muted-foreground">Комплектация:</span> {selectedConfigData.name} - {selectedConfigData.price}</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;