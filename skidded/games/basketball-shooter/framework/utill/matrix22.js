var Red = Red || {};

Red.Matrix22 = (function ()
{
    function Matrix22(_11, _12, _21, _22)
    {
        this._11 = _11 || 0;
        this._12 = _12 || 0;
        this._21 = _21 || 0;
        this._22 = _22 || 0;
    }

    Matrix22.prototype = {
        toString : function ()
        {
            return ["[", this._11, this._12, this._21, this._22, "]"].join(" ");
        },
        set : function (_11, _12, _21, _22)
        {
            this._11 = _11 || 0;
            this._12 = _12 || 0;
            this._21 = _21 || 0;
            this._22 = _22 || 0;
        },
        scale : function (s)
        {
            this._11 *= s;
            this._12 *= s;
            this._21 *= s;
            this._22 *= s;
        },
        multiply : function (mat)
        {
            this.set(
                this._11 * mat._11 + this._12 * mat._21,
                this._11 * mat._12 + this._12 * mat._22,
                this._21 * mat._11 + this._22 * mat._21,
                this._21 * mat._12 + this._22 * mat._22);
        },
        inverse : function ()
        {
            var det = this._11 * this._22 - this._12 * this._21;
            det = det !== 0 ? 1/det : det;
            this.set( this._22 * det, -this._12 * det,
                -this._21 * det, this._11 * det );

        },
    };

    Matrix22.Multiply = function (m1, m2)
    {
        return new Matrix22(
            m1._11 * m2._11 + m1._12 * m2._21,
            m1._11 * m2._12 + m1._12 * m2._22,
            m1._21 * m2._11 + m1._22 * m2._21,
            m1._21 * m2._12 + m1._22 * m2._22);
    };

    /**
     * mat * x(out) = vec
     * @param mat Matrix22
     * @param vec Vector2
     * @param out Vector2 || {x, y}
     */
    Matrix22.solve = function (mat, vec, out)
    {
        var det = mat._11 * mat._22 - mat._12 * mat._21;
        det = det !== 0 ? 1/det : det;
        out.x = det * (mat._22 * vec.x - mat._12 * vec.y);
        out.y = det * (mat._11 * vec.y - mat._21 * vec.x);
    };


    return Matrix22;
})();