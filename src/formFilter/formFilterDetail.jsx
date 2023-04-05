import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap";

const FormFilterDetail = () => {
  return (
    <>
      <Container className="formFilter">
        <form>
          <Card body className="ps-4">
            <div className="d-lg-flex d-block ">
              <div className="form me-2">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Nama Mobil</Form.Label>
                  <Form.Control disabled type="text" placeholder="Nama Mobil" />
                </Form.Group>
              </div>
              <div className="me-2 form">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Kategori</Form.Label>
                  <Form.Select disabled placeholder="Kategori">
                    <option value="">Masukkan Kagetori Mobil</option>
                    <option value="small">2 - 4 Orang</option>
                    <option value="medium">4 - 6 Orang</option>
                    <option value="large">6 - 8 Orang</option>
                  </Form.Select>
                </Form.Group>
              </div>
              <div className="me-2 form">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Harga</Form.Label>
                  <div className="input-group">
                    <Form.Control
                      disabled
                      type="text"
                      placeholder="min"
                      className="form-control"
                    />
                    <Form.Control
                      disabled
                      type="text"
                      placeholder="max"
                      className="form-control"
                    />
                  </div>
                </Form.Group>
              </div>
              <div className="me-2 form">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Status</Form.Label>
                  <Form.Select disabled placeholder="Harga">
                    <option value="">Masukkan Status</option>
                    <option value={false}>Disewakan</option>
                    <option value={true}>Belum Disewa</option>
                  </Form.Select>
                </Form.Group>
              </div>
              <div className="button justify-content-center d-flex py-4">
                <Button type="submit">Mulai Sewa</Button>
              </div>
            </div>
          </Card>
        </form>
      </Container>
    </>
  );
};

export default FormFilterDetail;