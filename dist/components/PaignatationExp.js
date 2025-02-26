import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/style.css'; // the custom import file
import '../styles/PaignatationExp.css'; // the custom import file
import Pagination from 'react-bootstrap/Pagination';
let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
    items.push(_jsx(Pagination.Item, { active: number === active, children: number }, number));
}
const PaginationExp = () => {
    return (_jsx(Container, { children: _jsx(Row, { className: "rounded background-color-body mt-3 p-3 justify-content-center", children: _jsx(Col, { className: "text-center", children: _jsxs(Pagination, { size: "sm", className: "justify-content-center", children: [_jsx(Pagination.First, {}), _jsx(Pagination.Prev, {}), _jsx(Pagination.Ellipsis, {}), items, _jsx(Pagination.Ellipsis, {}), _jsx(Pagination.Next, {}), _jsx(Pagination.Last, {})] }) }) }) }));
};
export default PaginationExp;
