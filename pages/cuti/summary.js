import { Table, Divider, Row, Col, Tooltip, Progress } from 'antd';
import axios from "axios";
import { connect } from 'react-redux';
import { setPageTitle } from '../../redux/store'

//Layout
import MainLayout from "../../layouts/BasicLayout";
import style from "./summary.less"

const ProgressCuti = ({ title, percent }) => (<Tooltip title={title}>
                        <Progress percent={percent} showInfo={false} />
                    </Tooltip>)

const columns = [{
    title: 'Nama',
    dataIndex: 'namagelar',
    key: 'namagelar',
    sorter: (a, b) => { return a.namagelar.localeCompare(b.namagelar) },
},
{
    title: 'Cuti',
    children: [
        {
            title: 'Tahunan',
            dataIndex: 'nmgol',
            key: 'nmgol',
            width: 80,
            render: ( cuti ) => (<span>Terpakai 6 hari, Sisa 4 hari.</span>)
        }, {
            title: 'Alasan Penting',
            dataIndex: 'nipbaru',
            key: 'nipbaru',
            render: ( cuti ) => (<ProgressCuti title="Terpakai 6 hari, Sisa 4 hari." percent={60} />)
        }, {
            title: 'Besar',
            key: 'nmstjab',
            dataIndex: 'nmstjab',
            render: ( cuti ) => (<ProgressCuti title="Terpakai 6 hari, Sisa 4 hari." percent={20} />)
        }, {
            title: 'Sakit',
            key: 'nmstjab',
            dataIndex: 'nmstjab',
            render: ( cuti ) => (<ProgressCuti title="Terpakai 6 hari, Sisa 4 hari." percent={80} />)
        }, {
            title: 'Bersalin',
            key: 'nmstjab',
            dataIndex: 'nmstjab',
            render: ( cuti ) => (<ProgressCuti title="Terpakai 6 hari, Sisa 4 hari." percent={0} />)
        }, {
            title: 'LTN',
            key: 'nmstjab',
            dataIndex: 'nmstjab',
            render: ( cuti ) => (<ProgressCuti title="Terpakai 6 hari, Sisa 4 hari." percent={0} />)
        }
    ]
}, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
        <span>
            <a href="javascript:;">Edit</a>
            <Divider type="vertical" />
            <a href="javascript:;">Tambah</a>
        </span>
    ),
}];

class CutiSummary extends React.Component {
    state = {
        data: []
    };

    componentDidMount() {
        axios.get('/api/pegawai')
            .then(({ data }) => {
                this.setState({ data })
            })
            .catch(function (error) {
                alert("Terjadi kesalahan. Mohon hubungi Admin.")
                console.log(error);
            });
    }

    render() {
        return (
            <MainLayout>
                <Row>
                    <Col span={24}>
                        <div className={style.indexForm}>
                            <Table columns={columns} dataSource={this.state.data} rowKey="niplama" bordered size="small" pagination={false}/>
                        </div>
                    </Col>
                </Row>
            </MainLayout>
        );
    }
}

export default connect()(CutiSummary)