import React, {Component} from 'react';
import Header from '../HeaderComponent/Header'
import ListItem from '../ListItem/ListItem'
import Balance from '../BalanceComponent/Balance'
import data from '../../Content/ListItems.json'
import './MachinesComponent.css'

class MachinesComponent extends Component {
    state = {
        list : '',
        balance: 25
    }
    componentDidMount() {
        const dataFromJson = data.devices
        this.setState({list: dataFromJson})
    }
    deleteListItem = key => {
        const { list } = this.state
        const remaining = list.filter((device, index) => {
            return index !== key
        })
        this.setState({list : remaining})
    }

    addListItem = () => {
        const {list} = this.state
        const id = Number(list[0] && list.slice(-1)[0].id)
        const newList = {
            id: id ? id+1 : 1,
            label : `Washer ${id ? id+1 : 1}`,
            status: 'Available'
        }
        this.setState({ list: [...list, newList]})
    }

    addBalance = () => {
        const bal = this.state.balance
        this.setState({ balance: bal + 5})
    }

    render() {
        const { list } = this.state
        return (
            <div className='machine-screen'>
            
            <Header
            displayText='Select a machine'
            addBtn={true}
            addListItem={() => this.addListItem()}
            />
            {list && 
            list.map((each, index) => {
                return (
                    <ListItem
                     device={each}
                     key={index}
                     deleteListItem={() => this.deleteListItem(index)}
                    />
                )
            })}
            <Balance 
             balance={this.state.balance}
             addBalance={() => this.addBalance()}
             />
            </div>
        )
    }
}

export default MachinesComponent