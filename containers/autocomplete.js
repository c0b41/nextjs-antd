import { AutoComplete } from 'antd';

function onSelect(value) {
  console.log('onSelect', value);
}

export default class Complete extends React.Component {
  state = {
    dataSource: [],
  }

  handleChange = (value) => {
    this.setState({
      dataSource: !value ? [] : [
        value,
        value + value,
        value + value + value,
      ],
    });
  }

  render() {
    const { dataSource } = this.state;
    const { style } = this.props;
    return (
      <AutoComplete
        dataSource={dataSource}
        style={style}
        onSelect={onSelect}
        onChange={this.handleChange}
        placeholder="input here"
      />
    );
  }
}