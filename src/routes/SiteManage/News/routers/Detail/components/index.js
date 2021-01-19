import React from 'react'
import { connect, router } from 'dva'
import { Layout, Row, Col, Button } from 'antd'
import BaseComponent from 'components/BaseComponent'
import Panel from 'components/Panel'
import Form from 'components/Form'
import PageHelper from '@/utils/pageHelper'
import $$ from 'cmn-utils'
import columns from './columns'
const { Content } = Layout

@connect()
export default class extends BaseComponent {
  onSubmit(values) {
    console.log(values)
  }
  render() {
    return (
      <Layout className="full-layout page blank-page">
        <Content>
          <Row>
            <Col span={24}>
              <Panel title="表单验证">
                <Form columns={columns} onSubmit={this.onSubmit}></Form>
              </Panel>
            </Col>
          </Row>
        </Content>
      </Layout>
    )
  }
}
