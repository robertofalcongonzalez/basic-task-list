import { useRichText } from "../../composables/useRichText"
import { mockTags } from "../mock/richText";

const { addNewItem, deleteElement, tags, inEdition } = useRichText()


describe('Rich text functionalities', () => {

    it('should not insert when tag is empty', () => {
        inEdition.value = '';
        addNewItem();
        expect(tags.value).toStrictEqual([])
    })

    it('should not insert when tag is only space/s', () => {
        inEdition.value = ' ';
        addNewItem();
        expect(tags.value).toStrictEqual([])
    })

    it('should add inEditionTag to tags array', () => {
        inEdition.value = 'element ';
        addNewItem();
        expect(tags.value.length).toBe(1)
    })

    it('should delete last element if event value is empty', () => {
        tags.value = [...mockTags];
        deleteElement({target:{value: ''}});
        expect(tags.value).toStrictEqual([])
    })
})