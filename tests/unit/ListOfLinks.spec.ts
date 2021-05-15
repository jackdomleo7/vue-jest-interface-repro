import { shallowMount } from '@vue/test-utils'
import ListOfLinks/*, { ILink }*/ from '@/components/ListOfLinks.vue'

describe('ListOfLinks.vue', () => {
  it('renders props.list when passed', () => {
    const list/*: ILink[]*/ = [
      {
        text: 'vue-jest repo',
        url: 'https://github.com/vuejs/vue-jest'
      },
      {
        text: 'vue-jest interface issue',
        url: 'https://github.com/vuejs/vue-jest/issues/189'
      }
    ]

    const wrapper = shallowMount(ListOfLinks, {
      props: { list }
    })

    expect(wrapper.findAll('li').length).toBe(list.length)
  })
})
