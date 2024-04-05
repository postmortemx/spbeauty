import Heading from "./Components/Heading";
import General from "./Components/General/General";
import Addresses from "./Components/Addresses/Addresses";
function AboutCompany() {
    return (
        <div>
            <Heading/> {/* Заголовок и кнопка справа */}
            <div class="container" className='d-flex mt-5 gap-4'>
                <General class="row"/>  {/* Основная информация вроде названия, типа и телефона */}
                <Addresses class="row"/> {/* Список доступных адресов заведений */}
            </div>
        </div>
    );
}

export default AboutCompany;