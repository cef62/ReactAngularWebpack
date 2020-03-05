import angular from 'angular'
import root from './root/root'
import reactWrappers from './reactWrappers'

const angularModule = angular
  .module('components', [])
  .component('root', root())
  .component('buttonWrapper', reactWrappers.buttonWrapper())

export default angularModule.name
