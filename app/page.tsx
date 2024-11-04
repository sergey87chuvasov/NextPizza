import { Container, SortPopup, Title } from '@/components/shared';
import { Filters } from '@/components/shared/filters';
import { ProductCard } from '@/components/shared/product-card';
import { TopBar } from '@/components/shared/top-bar';

export default function Home() {
  return (
    <>
      <Container className='mt-10'>
        <Title text='Все пиццы' size='lg' />
      </Container>
      <TopBar />
      {/* <div style={{ height: '3000px' }}></div> */}

      <Container className='mt-10 pb-14'>
        <div className='flex gap-[60px]'>
          {/* фильтрация */}
          <div className='w-[250px]'>
            <Filters />
          </div>

          {/* список товаров */}
          <div className='flex-1'>
            <div className='flex flex-col gap-16'>
              <ProductCard
                id={0}
                name='Чизбургер-пицца'
                price={550}
                imageUrl='https://media.dodostatic.net/image/r:292x292/11EF6E92875574239DE842FB185A5650.avif'
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
