import React from 'react'
import { Container, Table } from 'react-bootstrap'

import { FormattedMessage } from 'react-intl'

const TablePrice = ({ title, header, body }) => {
  return (
    <section className="service_section_2 commonSection" style={{
      padding: '50px 0'
    }}>
      <Container>
        <h1 style={{ textAlign: 'center' }}><FormattedMessage id={title} /></h1>
        <Table responsive>
          <thead>
            <tr>
              {header.map((cell, index) => (
                <td key={index} style={{ textAlign: 'center', fontWeight: 'bold' }}>{cell}</td>
              ))}
            </tr>
          </thead>
          <tbody>
            {body.map((line, index) => (
              <tr key={index}>
                {line.map((cell, index) => (
                  <td key={index} style={index === 0 ? { textAlign: 'right', fontWeight: 'bold' } : { textAlign: 'center' }}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </section>
  )
}

export default TablePrice
