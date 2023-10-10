import Link from 'next/link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function AdminProfileCard({
  title,
  text1,
  text2,
  action,
  link,
}) {
  return(
    <Card className='mb-2'>
        <Card.Body>
            <Row>
                <Col>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{text1}{text2}</Card.Text>
                </Col>
                <Col className='m-auto'>
                    <div className='d-flex justify-content-end'>
                      <Link href={link} style={{ textDecoration: 'inherit'}}>
                        {action}
                      </Link>
                    </div>
                </Col>
            </Row> 
        </Card.Body>
    </Card>
  );
}