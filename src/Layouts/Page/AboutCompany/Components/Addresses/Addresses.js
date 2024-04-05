import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
    return (
        <div class="d-flex flex-column justify-content-between bordertest col p-4">
                <div>
                    <div className='title'>Адреса заведений</div>
                    <div>
                        <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                        <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
                    </div>
                </div>
                <SecondaryButton>Добавить филиал</SecondaryButton>
        </div>
    );
}

export default Addresses;