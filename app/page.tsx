import { Container, SortPopup, Title } from '@/components/shared';
import { Filters } from '@/components/shared/filters';
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
            <div className='flex flex-col gap-16'>Список товаров</div>
          </div>
        </div>
      </Container>
    </>
  );
}
