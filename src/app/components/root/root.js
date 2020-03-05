import htmlTemplate from './root.tpl.html'
import './root.less'

export default function rootComponent() {
  return {
    template: htmlTemplate,

    controller($scope) {
      let counterBtn1 = 0
      let counterBtn2 = 0

      this.onClickBtn1 = () => {
        counterBtn1++
        this.btnText1 = `Button 1 - clicked ${counterBtn1} times`
        $scope.$apply()
      }

      this.onClickBtn2 = () => {
        counterBtn2++
        this.btnText2 = `Button 2 - clicked ${counterBtn2} times`
        $scope.$apply()
      }

      this.$onInit = () => {
        this.title = 'Root component loaded!'
        this.btnText1 = 'Button 1'
        this.btnText2 = 'Button 2'
      }
    },
  }
}
