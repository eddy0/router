import React from 'react'


class Loading extends React.Component {
    state = {
        text: this.props.children
    }

    componentDidMount(){
        let loading = this.props.children + '...'
        this.interval = window.setInterval(() => {
            this.setState((prev) => {
                if (prev.text === loading) {
                    return {
                        text: this.props.children
                    }
                } else {
                    return {
                        text: prev.text + '.'
                    }
                }
            })
        }, 300)
    }

    componentWillUnmount() {
        window.clearInterval(this.interval)
    }

    render() {
        return (
            <div className='dashboard-toggle' style={{marginTop: 100}}>
                {this.state.text}
            </div>

        )
    }
}

export default Loading