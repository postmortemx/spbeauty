import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
    return (
        <div class="bordertest">
            <div className='d-inline-flex flex-column gap-4 ms-4 mt-4 me-4 mb-4'>
                <div class="spacebetween">
                    <div className='title'>Адреса заведений</div>
                    <div className='d-inline-flex flex-column gap-1'>
                        <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                        <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
                    </div>
                </div>
                <SecondaryButton>Добавить филиал</SecondaryButton>
            </div>
        </div>
    );
}

export default Addresses;