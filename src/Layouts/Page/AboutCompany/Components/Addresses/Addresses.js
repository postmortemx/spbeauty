import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
    return (
        <div class="d-flex flex-column justify-content-between bordertest col p-4 ms-5">
                <div>
                    <div className='title mb-4'>Адреса заведений</div>
                    <div>
                        <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                        <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
                    </div>
                </div>
                <SecondaryButton>Добавить филиал</SecondaryButton>
        </div>
    );
}
/*Хотел между ListElement выставить gap в 8 пикс как на макете через className='gap-2' внутри div'а, но не вышло*/
export default Addresses;