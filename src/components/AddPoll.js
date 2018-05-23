import React from 'react'
import {connect} from 'react-redux'
import {handleAddPoll} from "../actions/polls";

class AddPoll extends React.Component {
    state = {
        question: '',
        a: '',
        b: '',
        c: '',
        d: '',
    }

    handleChange = (e) => {
        let {name, value } = e.target
        this.setState((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    isDisabled = () => {
        let {question, a, b, c, d} = this.state
        return question.trim() ==='' || a.trim() === '' || b.trim() === '' || c.trim() === '' || d === ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.history.push('/')

        this.props.dispatch(handleAddPoll(this.state))

    }

    render() {
        return (
            <form className='add-form' onSubmit={this.handleSubmit}>
                <h3> what's your question?</h3>
                <input type="text" name='question' className='input' onChange={this.handleChange} placeholder="what's your question" value={this.state.question}/>

                <h3>please enter the options:</h3>
                <label className='label' htmlFor="a">A.</label>

                <input type="text" name='a' className='input'  onChange={this.handleChange}  placeholder="a" value={this.state.a}/>
                <label className='label' htmlFor="b">B.</label>
                <input type="text" name='b'  className='input' onChange={this.handleChange}  placeholder="b"  value={this.state.b} />
                <label className='label' htmlFor="c">C.</label>
                <input type="text" name='c' className='input' onChange={this.handleChange}  placeholder="c" value={this.state.c} />
                <label className='label' htmlFor="d">D.</label>
                <input type="text" name='d' className='input' onChange={this.handleChange}  placeholder="d" value={this.state.d} />
                <button className='btn' type='submit' disabled={this.isDisabled()}>SUBMIT</button>
            </form>


        )
    }
}

export default connect()(AddPoll)