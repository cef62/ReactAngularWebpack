// @ts-nocheck
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { IController, IComponentOptions, IOnChangesObject } from 'angular'

import Button from '../../../react/components/Button'

export default function reactWrapper(): IComponentOptions {
  return {
    template: '<div></div>',

    bindings: {
      btnLabel: '<',
      onClick: '<?',
    },

    controller: Controller,
  }
}

class Controller implements IController {
  constructor(private $element) {}

  $onInit() {
    ReactDOM.render(
      <Button label={this.btnLabel} onClick={this.onClick} />,
      this.$element[0],
    )
  }

  $onChanges(_change: IOnChangesObject) {
    ReactDOM.render(
      <Button label={this.btnLabel} onClick={this.onClick} />,
      this.$element[0],
    )
  }
}
