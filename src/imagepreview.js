(function($) {
    var params = {
        prop: "name",
        input: null,
        reset: null,
        preview: null,
        attributes: {}
    };
    var images = {};
    var methods = {
        init: function(args) {
            params = $.extend(params, args);
            if (params.input) {
                methods.input(params.input, params.preview);
            }
            if (params.reset) {
                methods.reset(params.input, params.reset, params.preview);
            }
        },
        getImage: function(input) {
            var image;
            var name = $(input).prop(params.prop);
            image = $(input).prop('files')[0];
            if (image) {
                images[name] = image;
                return image;
            }
            var image = images[name];
            if (image) {
                return image;
            }
            return null;
        },
        clearImage: function(inputDom) {
            delete images[$(inputDom).prop(params.prop)];
        },
        input: function(input, preview) {
            $(input).on('change', function() {
                var file = methods.getImage(this);
                if (!file) {
                    return;
                }
                methods.clearImage(input);
                var fr = new FileReader();
                fr.readAsDataURL(file);
                fr.onload = function() {
                    var img = $('<img />').attr('src', this.result);
                    jQuery.each(params.attributes, function(attr, value) {
                        img.attr(attr, value);
                    });
                    $(preview).empty().append(img);
                };
                images[$(input).prop(params.prop)] = file;
            });
        },
        reset: function(input, reset, preview) {
            $(reset).on('click', function() {
                $(input).val('');
                methods.clearImage(input);
                $(preview).empty();
            });
        }
    };
    
    $.fn.imagepreview = function(method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' +  method + ' does not exist on jQuery.imagepreview');
        }
  };
})(jQuery);




