import { menu } from "./data/data.js";
//const { createApp, ref, computed, watch } = Vue;
const { ref,computed } = Vue;

const app = Vue.createApp({

  setup() {
    const allBtn = ref("All");
    const leftMenu = ref([]);
    const rightMenu = ref([]);
    
    const koreaMenuArr = menu.filter(function (item) {
        if (item.category == "Korea") {
            return true;
        }
    });

    const japanMenuArr = menu.filter((item) => {
        if (item.category == "Japan") {
            return true;
        }
    });

    const chinaMenuArr = menu.filter((item) => {
        if (item.category == "China") {
            return true;
        }
    });

    
    function allItems(){

   

        leftMenu.value=menu.filter((item) => {
            if (item.id %2==0) {
                return true;
            }
        });
    
        rightMenu.value=menu.filter((item) => {
            if (item.id %2!=0) {
                return true;
            }
        });

        console.log("l: ",leftMenu);
        console.log("r: ",rightMenu);

    }

    function koreaItems() {

        leftMenu.value=koreaMenuArr.filter((item) => {
            if (item.id %2==0) {
                return true;
            }
        });
    
        rightMenu.value=koreaMenuArr.filter((item) => {
            if (item.id %2!=0) {
                return true;
            }
        });

    }

    function japanItems() {

        leftMenu.value=japanMenuArr.filter((item) => {
            if (item.id %2==0) {
                return true;
            }
        });
    
        rightMenu.value=japanMenuArr.filter((item) => {
            if (item.id %2!=0) {
                return true;
            }
        });

    }

    function chinaItems() {

        leftMenu.value=chinaMenuArr.filter((item) => {
            if (item.id %2==0) {
                return true;
            }
        });
    
        rightMenu.value=chinaMenuArr.filter((item) => {
            if (item.id %2!=0) {
                return true;
            }
        });

    }
        

    return {
      allBtn,
      menu,
      leftMenu,
      rightMenu,
      allItems,
      koreaItems,
      japanItems,
      chinaItems,
      

    };
  },
}).mount("#app");
