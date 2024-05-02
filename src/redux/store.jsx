import { legacy_createStore as createStore } from "redux"
import { basketReducer } from "./reducer/basketReducer"


// store'un oluşturulması 



export const store=createStore(basketReducer)// store oluşturuken parametre olarak reducer fonksiyonunu vermeliyiz. 