import { Container, SortPopup, Title } from '@/components/shared';
import { Filters } from '@/components/shared/filters';
import { Pagination } from '@/components/shared/pagination';
import { ProductsGroupList } from '@/components/shared/products-group-list';
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
        <div className='flex gap-[80px]'>
          {/* фильтрация */}
          <div className='w-[250px]'>
            <Filters />
          </div>

          {/* список товаров */}
          <div className='flex-1'>
            <div className='flex flex-col gap-16'>
              <ProductsGroupList
                title='Пиццы'
                items={[
                  {
                    id: 7,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D5F2F13041E9101158D09CEBAE0.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 8,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D5F2F13041E9101158D09CEBAE0.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 9,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D5F2F13041E9101158D09CEBAE0.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 10,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D5F2F13041E9101158D09CEBAE0.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 11,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D5F2F13041E9101158D09CEBAE0.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 12,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D5F2F13041E9101158D09CEBAE0.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title='Комбо'
                items={[
                  {
                    id: 1,
                    name: 'Салат Цезарь',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF8F87DE83DB4087C0DCB31F44325A.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: 'Салат Цезарь',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF8F87DE83DB4087C0DCB31F44325A.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: 'Салат Цезарь',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF8F87DE83DB4087C0DCB31F44325A.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: 'Салат Цезарь',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF8F87DE83DB4087C0DCB31F44325A.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: 'Салат Цезарь',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF8F87DE83DB4087C0DCB31F44325A.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 6,
                    name: 'Салат Цезарь',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF8F87DE83DB4087C0DCB31F44325A.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={2}
              />
            </div>

            <div className='flex items-center gap-6 mt-12'>
              <Pagination pageCount={5} />
              <span className='text-sm text-gray-400'>5 из 65</span>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
