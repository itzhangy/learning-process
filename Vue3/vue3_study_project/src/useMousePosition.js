/*
 * @Description:
 * @Author: yourName
 * @Date: 2022-04-14 09:17:29
 * @LastEditors: yourName
 * @LastEditTime: 2022-04-14 09:40:00
 */
import { ref, onMounted, onUnmounted } from 'vue'

function useMousePosition() {
  let x = ref(0)
  let y = ref(0)

  function update(e) {
    x.value = e.pageX
    y.value = e.pageY
  }

  onMounted(() => {
    window.addEventListener('mousemove', update)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', update)
  })

  return {  
    x,
    y
  }
}

export default useMousePosition
