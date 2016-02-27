import React from 'react';

/**
* ReactJs test
*/
/**
 * A FileUpload Form component that embed a FilePreview
 */
var FileUpload = React.createClass({
	// We define here the initial state of the component.
	getInitialState: function() {
		return {
			file: false
		};
		},
		/**
		 * things to do when file change.
		 */
	handleFile: function(e) {
        var preview = this.refs.preview;
		var file = e.target.files[0];
		var reader = new FileReader();

			//we have a file and it is an image
		if (file.type.indexOf('image') === 0) {
            reader.readAsDataURL(file);
		} else {
			preview.updatePreview({
				src: '/images/binary-file.png',
				name: file.name,
			});
		}

        reader.onloadend = function() {
        	// console.log("file reader onloadend");
        	preview.updatePreview({
				src: reader.result,
				name: file.name,
			});
        }.bind(this);
	},
	/**
	 * Remove parent Uploader
	 */
	remove: function (){
		this.props.container.removeFileUpload(this.props.index);
	},
	/**
	 */
	render: function() {
		var index = this.props.index;
		return (
			<div id={"question_documents_" + index  }>
				<div id={"question_documents_" +  index + "_file"} className="hidden">
					<div className="form-group">
						<label className="control-label" htmlFor={"question_documents_"+ index +"_file_file"}>Fichier</label>
						<input
							ref="fileInput"
							type="file"
							onChange={this.handleFile}
							id={"question_documents_" +  index + "_file_file"}
							name={"question[documents]["+ index +"][file][file]"}
						/>
					</div>
				</div>
				<Preview name="" src=""/>
				<a href="#" onClick={this.remove}
					className="remove-document" title="Supprimer le fichier">
					<img src="/images/remove-doc.png" alt="Supprimer le fichier" />
				</a>
			</div>
		);
	}
});
