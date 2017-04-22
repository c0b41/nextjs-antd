import Layout from './../components/layout'
import { Row, Col  } from 'antd'
import AutoComplete from '../containers/autocomplete'

export default () => (
  <Layout title='Nextjs Antd Example'>
   <div>
   	<h1 style={styles.title}> Nextjs Antd Example </h1>
    <Row>	
      <Col span={24}>
      	<AutoComplete style={styles.autocomplete} />
      </Col>
    </Row>
  </div>

  </Layout>
)



const styles = {
  title: {
    textAlign: 'center',
    fontSize: 30,
    padding: 5
  },
  autocomplete: {
  	display:'block',
  	width: 300,
  	margin:'15px auto'
  }
}