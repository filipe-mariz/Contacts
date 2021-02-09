import Image from '../model/imageModel';

export default {
    Render(image: Image){
        return {
            id: image.id,
            path: `http://localhost:3333/uploads/${image.path}`
        }
    },

    renderMany(images: Image[]) {
        return images.map(image => this.Render(image))
    }
}
