import { Checkbox } from 'primereact/checkbox';
import { RadioButton } from 'primereact/radiobutton';




const FilterGroup = () => {
  return (
    <div className="flex align-items-center flex-col p-6 bg-light-gray-3 w-72">
      <span className='font-bold'>Filtrar por: </span>
      <div className="flex flex-col mbg-50 mt-2">
        <span className='text-[var(--dark-gray)] font-medium'>Marca </span>
        <div className="flex p-1">
          <Checkbox name="category" value="M" />
          <label htmlFor="category" className="ml-2">Adibas</label>
        </div>

        <div className="flex  p-1 ">
          <Checkbox name="category" value="M" />
          <label htmlFor="category" className="ml-2">Calenciaga</label>
        </div>

        <div className="flex p-1">
          <Checkbox name="category" value="M" />
          <label htmlFor="category" className="ml-2">K-Swiss</label>
        </div>

        <div className="flex p-1">
          <Checkbox name="category" value="M" />
          <label htmlFor="category" className="ml-2">Nike</label>
        </div>

        <div className="flex p-1">
          <Checkbox name="category" value="M" />
          <label htmlFor="category" className="ml-2">Puma</label>
        </div>


        <div className="flex align-items-center flex-col">
          <div className="flex flex-col mt-2">

            <span className='font-medium'>Categoria </span>

            <div className="flex p-1">
              <Checkbox name="category" value="M" />
              <label htmlFor="category" className="ml-2">Esporte e lazer</label>
            </div>

            <div className="flex p-1">
              <Checkbox name="category" value="M" />
              <label htmlFor="category" className="ml-2">Casual</label>
            </div>

            <div className="flex p-1">
              <Checkbox name="category" value="M" />
              <label htmlFor="category" className="ml-2">Utilitário</label>
            </div>

            <div className="flex p-1">
              <Checkbox name="category" value="M" />
              <label htmlFor="category" className="ml-2">Corrida</label>
            </div>
          </div>

          <div className="flex align-items-center flex-col">
            <div className="flex flex-col mt-2">


              <span className='font-medium'>Gênero </span>

              <div className="flex p-1">
                <Checkbox name="category" value="M" />
                <label htmlFor="category" className="ml-2">Masculino</label>
              </div>

              <div className="flex p-1">
                <Checkbox name="category" value="M" />
                <label htmlFor="category" className="ml-2">Feminino</label>
              </div>

              <div className="flex p-1">
                <Checkbox name="category" value="M" />
                <label htmlFor="category" className="ml-2">Unissex</label>
              </div>
            </div>


            <div className="flex align-items-center flex-col">
              <div className="flex mt-2 gap-2">

                <span className='font-medium'>Estado: </span>

                <div className="p-inputgroup flex gap-2">
                  <RadioButton name='Estado' />
                  <label htmlFor="Estado">Novo</label>
                </div>

                <div className="p-inputgroup flex gap-2">
                  <RadioButton name='Estado' />
                  <label htmlFor="Estado">Usado</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterGroup