import React, { Component, PropTypes } from 'react'
import WizardFormFirstPage from './WizardFormFirstPage'
import WizardFormThirdPage from './WizardFormThirdPage'

class WizardForm extends Component {
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1
    }
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  render() {
    const { onSubmit } = this.props
    const { page } = this.state
    const componentList = [
      {
        type: 'PAGE_ONE',
        id: 1,
        data: {
          'firstName-1': 'Jane',
          'lastName-1': 'Doe'
        }
      },
      {
        type: 'PAGE_ONE',
        id: 2,
        data: {
          'firstName-2': 'John',
          'lastName-2': 'Doe'
        }
      },
      {
        type: 'PAGE_THREE',
        id: 3
      }
    ]
    const typeMap = {
      PAGE_ONE: WizardFormFirstPage,
      PAGE_THREE: WizardFormThirdPage
    }


    return (<div>
      <h4>Page {page}</h4>

      {componentList.map((component, i) => (
        React.createElement(
          typeMap[component.type],
          {
            id: component.id,
            initialValues: component.data,
            key: i,
            onSubmit: i === component.length ? onSubmit: this.nextPage,
            previousPage: this.previousPage
          }
        )
      ))}
      </div>
    )
  }
}

WizardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default WizardForm
